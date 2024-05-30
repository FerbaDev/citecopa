import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { menuItems } from "../../../router/navigation.js";
import { AuthContext } from "../../../context/AuthContext";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../../firebaseConfig";
import LoginIcon from '@mui/icons-material/Login';
import { styled } from '@mui/material/styles';

const drawerWidth = 200;

function Navbar(props) {
  const { logoutContext, user, isLogged } = useContext(AuthContext);
  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const rolAdmin = import.meta.env.VITE_ROL_ADMIN;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleLogout = () => {
    logout();
    logoutContext();
    navigate("/login");
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

  const drawer = (
    <div>
      <Toolbar />

      <List>
        {menuItems.map(({ id, path, title, Icon }) => {
          return (
            <Link key={id} to={path}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Icon sx={{ color: "whitesmoke" }} />
                  </ListItemIcon>
                  <ListItemText primary={title} sx={{ color: "whitesmoke" }} />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}

        {user.rol === rolAdmin && (
          <Link to={"/dashboard"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon sx={{ color: "whitesmoke" }} />
                </ListItemIcon>
                <ListItemText
                  primary={"Dashboard"}
                  sx={{ color: "whitesmoke" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        )}
        {
          isLogged ? <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon sx={{ color: "whitesmoke" }} />
            </ListItemIcon>
            <ListItemText
              primary={"Cerrar sesión"}
              sx={{ color: "whitesmoke" }}
            />
          </ListItemButton>
        </ListItem> : <Link to={"/login"}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LoginIcon sx={{ color: "whitesmoke" }} />
            </ListItemIcon>
            <ListItemText
              primary={"Iniciar sesión"}
              sx={{ color: "whitesmoke" }}
            />
          </ListItemButton>
        </ListItem>
        </Link>
        }
        
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", marginBottom: "16px", maxWidth: "100%" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          backgroundColor: "#281549",
        }}
      >
        <Toolbar
          sx={{ gap: "20px", display: "flex", justifyContent: "space-between" }}
        >
          <Link to="/" className="logo">
            CITECoPa
          </Link>
          <Box sx={{ display: "flex", gap: "1em", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon color="inherit" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor={"right"}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "green",
            },
          }}
        >
          <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon sx={{ color: "whitesmoke" }}/>
          </IconButton>
        </DrawerHeader>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
