import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  CircularProgress,
  Alert,
} from '@mui/material';
import { Add as AddIcon, Search as SearchIcon } from '@mui/icons-material';
import { bundleService } from '../../services/bundles';
import { BundleFormModal } from './components/BundleFormModal';
import { useDebounce } from '../../hooks/useDebounce';

interface Bundle {
  id: string;
  name: string;
  description?: string;
  image_url?: string;
  is_public: boolean;
  bundle_tags?: { tag: string }[];
  bundle_items?: any[];
}

export const BundlesPage: React.FC = () => {
  const [bundles, setBundles] = useState<Bundle[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const debouncedSearch = useDebounce(searchTerm, 300);

  const loadBundles = async () => {
    try {
      setError(null);
      const data = await bundleService.getBundles({
        search: debouncedSearch,
        tags: selectedTags.length > 0 ? selectedTags : undefined,
      });
      setBundles(data || []);
    } catch (error) {
      setError('Failed to load bundles');
      console.error('Error loading bundles:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadBundles();
  }, [debouncedSearch, selectedTags]);

  const handleCreateSuccess = () => {
    setIsModalOpen(false);
    loadBundles();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Inventory Bundles
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Manage pre-defined sets of items for quick reservations
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setIsModalOpen(true)}
        >
          Create Bundle
        </Button>
      </Box>

      <Paper sx={{ p: 3, mb: 3 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search bundles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3 }}
        />

        {isLoading ? (
          <Box display="flex" justifyContent="center" p={4}>
            <CircularProgress />
          </Box>
        ) : bundles.length === 0 ? (
          <Box textAlign="center" py={4}>
            <Typography>No bundles found. Create your first bundle to get started!</Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {bundles.map((bundle) => (
              <Grid item xs={12} sm={6} md={4} key={bundle.id}>
                <Card>
                  {bundle.image_url && (
                    <CardMedia
                      component="img"
                      height="140"
                      image={bundle.image_url}
                      alt={bundle.name}
                    />
                  )}
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="h6" component="div">
                        {bundle.name}
                      </Typography>
                      <Chip
                        label={bundle.is_public ? 'Public' : 'Private'}
                        color={bundle.is_public ? 'success' : 'default'}
                        size="small"
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {bundle.description}
                    </Typography>
                    {bundle.bundle_tags && bundle.bundle_tags.length > 0 && (
                      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                        {bundle.bundle_tags.map((tag) => (
                          <Chip
                            key={tag.tag}
                            label={tag.tag}
                            size="small"
                            variant="outlined"
                          />
                        ))}
                      </Stack>
                    )}
                    <Typography variant="body2" color="text.secondary">
                      {bundle.bundle_items?.length || 0} items in bundle
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Paper>

      <BundleFormModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleCreateSuccess}
      />
    </Box>
  );
};
