import { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Category, CategoryAttribute } from '../types/inventory';

interface CategoryManagerProps {
  categories: Category[];
  onCategoryChange: (categories: Category[]) => void;
}

const CategoryManager = ({ categories, onCategoryChange }: CategoryManagerProps) => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [editMode, setEditMode] = useState(false);
  
  const [formData, setFormData] = useState<Partial<Category>>({
    name: '',
    parentId: undefined,
    attributes: [],
    description: '',
  });

  const [attributeFormData, setAttributeFormData] = useState<Partial<CategoryAttribute>>({
    name: '',
    type: 'text',
    required: false,
  });

  const handleOpen = (category?: Category) => {
    if (category) {
      setSelectedCategory(category);
      setFormData(category);
      setEditMode(true);
    } else {
      setSelectedCategory(null);
      setFormData({
        name: '',
        parentId: undefined,
        attributes: [],
        description: '',
      });
      setEditMode(false);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCategory(null);
    setFormData({
      name: '',
      parentId: undefined,
      attributes: [],
      description: '',
    });
    setAttributeFormData({
      name: '',
      type: 'text',
      required: false,
    });
  };

  const handleAddAttribute = () => {
    if (attributeFormData.name && attributeFormData.type) {
      const newAttribute: CategoryAttribute = {
        id: Math.random().toString(36).substr(2, 9),
        name: attributeFormData.name,
        type: attributeFormData.type as 'text' | 'number' | 'boolean' | 'date',
        required: attributeFormData.required || false,
        options: attributeFormData.options,
      };

      setFormData(prev => ({
        ...prev,
        attributes: [...(prev.attributes || []), newAttribute],
      }));

      setAttributeFormData({
        name: '',
        type: 'text',
        required: false,
      });
    }
  };

  const handleRemoveAttribute = (attributeId: string) => {
    setFormData(prev => ({
      ...prev,
      attributes: prev.attributes?.filter(attr => attr.id !== attributeId) || [],
    }));
  };

  const handleSave = () => {
    if (!formData.name) return;

    const newCategory: Category = {
      id: selectedCategory?.id || Math.random().toString(36).substr(2, 9),
      name: formData.name,
      parentId: formData.parentId,
      attributes: formData.attributes || [],
      description: formData.description,
    };

    const updatedCategories = editMode
      ? categories.map(cat => (cat.id === newCategory.id ? newCategory : cat))
      : [...categories, newCategory];

    onCategoryChange(updatedCategories);
    handleClose();
  };

  const handleDelete = (categoryId: string) => {
    const updatedCategories = categories.filter(cat => cat.id !== categoryId);
    onCategoryChange(updatedCategories);
  };

  interface CategoryWithLevel extends Category {
    level: number;
  }

  const getCategoryHierarchy = (categoryId?: string, level = 0): CategoryWithLevel[] => {
    const directChildren = categories.filter(cat => cat.parentId === categoryId);
    return directChildren.reduce((acc, category) => {
      return [...acc, { ...category, level }, ...getCategoryHierarchy(category.id, level + 1)];
    }, [] as CategoryWithLevel[]);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6">Category Management</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
        >
          Add Category
        </Button>
      </Box>

      <Paper sx={{ mt: 2 }}>
        <List>
          {getCategoryHierarchy().map((category) => (
            <ListItem
              key={category.id}
              sx={{ pl: (category.level || 0) * 4 }}
            >
              <ListItemText
                primary={category.name}
                secondary={`${category.attributes?.length || 0} attributes`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => handleOpen(category)}
                  sx={{ mr: 1 }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(category.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          {editMode ? 'Edit Category' : 'Add New Category'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Category Name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              sx={{ mb: 2 }}
            />

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Parent Category</InputLabel>
              <Select
                value={formData.parentId || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, parentId: e.target.value }))}
                label="Parent Category"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {categories.map((cat) => (
                  <MenuItem
                    key={cat.id}
                    value={cat.id}
                    disabled={cat.id === selectedCategory?.id}
                  >
                    {cat.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              multiline
              rows={2}
              label="Description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              sx={{ mb: 3 }}
            />

            <Typography variant="h6" sx={{ mb: 2 }}>
              Attributes
            </Typography>

            <Box sx={{ mb: 2 }}>
              <TextField
                label="Attribute Name"
                value={attributeFormData.name}
                onChange={(e) => setAttributeFormData(prev => ({ ...prev, name: e.target.value }))}
                sx={{ mr: 2 }}
              />
              <FormControl sx={{ mr: 2, minWidth: 120 }}>
                <InputLabel>Type</InputLabel>
                <Select
                  value={attributeFormData.type || 'text'}
                  onChange={(e) => setAttributeFormData(prev => ({ 
                    ...prev, 
                    type: e.target.value as 'text' | 'number' | 'boolean' | 'date'
                  }))}
                  label="Type"
                >
                  <MenuItem value="text">Text</MenuItem>
                  <MenuItem value="number">Number</MenuItem>
                  <MenuItem value="boolean">Boolean</MenuItem>
                  <MenuItem value="date">Date</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                onClick={handleAddAttribute}
                disabled={!attributeFormData.name || !attributeFormData.type}
              >
                Add Attribute
              </Button>
            </Box>

            <List>
              {formData.attributes?.map((attr) => (
                <ListItem key={attr.id}>
                  <ListItemText
                    primary={attr.name}
                    secondary={`Type: ${attr.type}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleRemoveAttribute(attr.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" disabled={!formData.name}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CategoryManager;
