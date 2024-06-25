import { AppBar, Toolbar, Button, Typography, Grid, Container } from "@mui/material";
import { Link } from "react-router-dom";
import GroupIcon from '@mui/icons-material/Group';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ListAltIcon from '@mui/icons-material/ListAlt';
import './styles.css'; // Importa el archivo CSS

const Dashboard = () => {
  return (
    <Container>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Dashboard de administrador
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} className="gridContainer">
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/miembros" className="buttonLink">
            <Button variant="contained" color="primary" fullWidth startIcon={<GroupIcon />}>
              Ver miembros
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/contactos" className="buttonLink">
            <Button variant="contained" color="primary" fullWidth startIcon={<ContactMailIcon />}>
              Ver contactos de club de ciencias
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/formulario-contacto" className="buttonLink">
            <Button variant="contained" color="primary" fullWidth startIcon={<ListAltIcon />}>
              Ver formularios de contacto
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
