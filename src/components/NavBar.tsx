import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  useMediaQuery, 
  useTheme, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  ListItemIcon,
  Box,
  Divider,
  Menu,
  MenuItem
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AssessmentIcon from '@mui/icons-material/Assessment';

const navItems = [
  { text: 'Dashboard', path: '/', icon: <DashboardIcon /> },
  {
    text: 'Events',
    path: '/events',
    icon: <EventIcon />,
    subItems: [
      { text: 'All Events', path: '/events' },
      { text: 'Templates', path: '/events/templates' }
    ]
  },
  { text: 'Attendees', path: '/attendees', icon: <PeopleIcon /> },
  { text: 'Venues', path: '/venues', icon: <LocationOnIcon /> },
  { text: 'Calendar', path: '/calendar', icon: <CalendarMonthIcon /> },
  {
    text: 'Inventory',
    path: '/inventory',
    icon: <InventoryIcon />,
    subItems: [
      { text: 'All Items', path: '/inventory' },
      { text: 'Scan Items', path: '/warehouse/scan', icon: <QrCodeScannerIcon /> },
      { text: 'Maintenance', path: '/inventory/maintenance' },
      { text: 'Suppliers', path: '/inventory/suppliers' }
    ]
  },
  { text: 'Finance', path: '/finance', icon: <AccountBalanceWalletIcon /> },
  { text: 'Reports', path: '/reports', icon: <AssessmentIcon /> }
];

function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const [menuAnchor, setMenuAnchor] = useState<{ [key: string]: HTMLElement | null }>({});

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, itemText: string) => {
    setMenuAnchor(prev => ({ ...prev, [itemText]: event.currentTarget }));
  };

  const handleMenuClose = (itemText: string) => {
    setMenuAnchor(prev => ({ ...prev, [itemText]: null }));
  };

  const isActive = (path: string) => {
    if (path === '/events' && location.pathname.startsWith('/events/templates')) {
      return true;
    }
    if (path === '/inventory' && (location.pathname.startsWith('/inventory/') || location.pathname.startsWith('/warehouse/'))) {
      return true;
    }
    return location.pathname === path;
  };

  const drawer = (
    <Box sx={{ width: 240, bgcolor: 'background.paper' }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="div" sx={{ color: 'primary.main' }}>
          Event Logistics
        </Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={isActive(item.path)}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'primary.light',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ color: isActive(item.path) ? 'primary.main' : 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text}
                sx={{ 
                  color: isActive(item.path) ? 'primary.main' : 'inherit',
                  '& .MuiTypography-root': {
                    fontWeight: isActive(item.path) ? 600 : 400,
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={1}
        sx={{ 
          bgcolor: 'background.paper',
          color: 'text.primary'
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Event Logistics
          </Typography>
            {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => (
                <Box key={item.text}>
                  {item.subItems ? (
                    <>
                      <Button
                        onClick={(e) => handleMenuOpen(e, item.text)}
                        startIcon={item.icon}
                        sx={{
                          color: isActive(item.path) ? 'primary.main' : 'inherit',
                          backgroundColor: isActive(item.path) ? 'primary.light' : 'transparent',
                          '&:hover': {
                            backgroundColor: isActive(item.path) ? 'primary.light' : 'action.hover',
                          },
                        }}
                      >
                        {item.text}
                      </Button>
                      <Menu
                        anchorEl={menuAnchor[item.text]}
                        open={Boolean(menuAnchor[item.text])}
                        onClose={() => handleMenuClose(item.text)}
                      >
                        {item.subItems.map((subItem) => (
                          <MenuItem
                            key={subItem.text}
                            component={Link}
                            to={subItem.path}
                            onClick={() => handleMenuClose(item.text)}
                            selected={location.pathname === subItem.path}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1
                            }}
                          >
                            {subItem.icon && <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>{subItem.icon}</Box>}
                            {subItem.text}
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <Button
                      component={Link}
                      to={item.path}
                      startIcon={item.icon}
                      sx={{
                        color: isActive(item.path) ? 'primary.main' : 'inherit',
                        backgroundColor: isActive(item.path) ? 'primary.light' : 'transparent',
                        '&:hover': {
                          backgroundColor: isActive(item.path) ? 'primary.light' : 'action.hover',
                        },
                      }}
                    >
                      {item.text}
                    </Button>
                  )}
                </Box>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default NavBar;
