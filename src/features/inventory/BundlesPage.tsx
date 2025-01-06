import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabase/client';
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
import { Add as AddIcon, Search as SearchIcon, Edit as EditIcon } from '@mui/icons-material';
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

const BundlesPage: React.FC = () => {
  const [bundles, setBundles] = useState<Bundle[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingBundle, setIsLoadingBundle] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBundle, setSelectedBundle] = useState<Bundle | null>(null);
  const debouncedSearch = useDebounce(searchTerm, 300);

  const loadBundles = async () => {
    try {
      setError(null);
      setIsLoading(true);

      // Check authentication first
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('Please sign in to view bundles');
      }

      const data = await bundleService.getBundles({
        search: debouncedSearch,
        tags: selectedTags.length > 0 ? selectedTags : undefined,
      });
      setBundles(data || []);
    } catch (error) {
      let errorMessage = 'Failed to load bundles';
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'object' && error !== null) {
        const supabaseError = error as { message?: string; details?: string; hint?: string };
        errorMessage = supabaseError.message || supabaseError.details || supabaseError.hint || errorMessage;
      }
      setError(errorMessage);
      console.error('Error loading bundles:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadBundles();
  }, [debouncedSearch, selectedTags]);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedBundle(null);
    setError(null);
  };

  const handleSuccess = async () => {
    try {
      setError(null);
      handleModalClose();
      await loadBundles();
    } catch (error) {
      let errorMessage = 'Failed to refresh bundles';
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'object' && error !== null) {
        const supabaseError = error as { message?: string; details?: string; hint?: string };
        errorMessage = supabaseError.message || supabaseError.details || supabaseError.hint || errorMessage;
      }
      setError(errorMessage);
      console.error('Error refreshing bundles:', error);
    }
  };

  const handleManageBundle = async (bundle: Bundle) => {
    try {
      setError(null);
      setIsLoadingBundle(true);
      // Get the full bundle details before opening the modal
      const fullBundle = await bundleService.getBundle(bundle.id);
      setSelectedBundle(fullBundle);
      setIsModalOpen(true);
    } catch (error) {
      let errorMessage = 'Failed to load bundle details';
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'object' && error !== null) {
        const supabaseError = error as { message?: string; details?: string; hint?: string };
        errorMessage = supabaseError.message || supabaseError.details || supabaseError.hint || errorMessage;
      }
      setError(errorMessage);
      console.error('Error loading bundle details:', error);
    } finally {
      setIsLoadingBundle(false);
    }
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
          disabled={isLoadingBundle}
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
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2" color="text.secondary">
                        {bundle.bundle_items?.length || 0} items in bundle
                      </Typography>
                      <Button
                        size="small"
                        startIcon={<EditIcon />}
                        onClick={() => handleManageBundle(bundle)}
                        disabled={isLoadingBundle}
                      >
                        Manage
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Paper>

      <BundleFormModal
        open={isModalOpen}
        onClose={handleModalClose}
        onSuccess={handleSuccess}
        initialData={selectedBundle ? {
          id: selectedBundle.id,
          name: selectedBundle.name,
          description: selectedBundle.description || '',
          imageUrl: selectedBundle.image_url || '',
          isPublic: selectedBundle.is_public,
          items: (selectedBundle.bundle_items || []).map(item => ({
            itemId: item.item_id,
            nestedBundleId: item.nested_bundle_id,
            quantity: item.quantity
          })),
          tags: selectedBundle.bundle_tags?.map(t => t.tag) || [],
        } : undefined}
      />
    </Box>
  );
};

export default BundlesPage;