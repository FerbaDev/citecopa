import { Box, Typography, Container, Grid, Link as MuiLink } from '@mui/material';
import { Instagram, Facebook, Google } from '@mui/icons-material';
import ReactWhatsapp from 'react-whatsapp';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1c2331', color: 'whitesmoke', fontFamily: "var(--font-spartan)" }}>
      <Box sx={{ backgroundColor: '#6351ce', py: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: {xs: "column", sm: "row"} }}>
            <Typography variant="body1" sx={{ fontFamily: "var(--font-spartan)", fontSize: "1.2em" }}>
              Encontranos en las redes sociales
            </Typography>
            <Box>
              <MuiLink href="#" color="inherit" sx={{ mx: 1 }}>
                <Facebook />
              </MuiLink>
              <MuiLink href="https://www.google.com/maps/place/Italia+401,+R8500API+Viedma,+R%C3%ADo+Negro/@-40.812704,-63.0127384,13.5z/data=!4m5!3m4!1s0x95f69804033feb7b:0x9c548ba25036f745!8m2!3d-40.8122159!4d-63.0078713?hl=es-419&entry=ttu" color="inherit" sx={{ mx: 1 }}>
                <Google />
              </MuiLink>
              <MuiLink href="https://www.instagram.com/linkclubdecienciasviedma/" color="inherit" sx={{ mx: 1 }}>
                <Instagram />
              </MuiLink>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: "var(--font-spartan)", fontSize: "1.5em" }}>
              Fundación Citecopa
            </Typography>
            <hr style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px', margin: '10px 0' }} />
            <Typography variant="body1" sx={{ fontFamily: "var(--font-spartan)" }}>
              Aquí puedes usar filas y columnas para organizar el contenido del pie de página. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: "var(--font-spartan)", fontSize: "1.5em" }}>
              Navegación
            </Typography>
            <hr style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px', margin: '10px 0' }} />
            <Link to="/club" style={{ display: 'block', margin: '8px 0', color: 'inherit', textDecoration: 'none' }}>Club de Ciencias</Link>
            <Link to="/laboratorio" style={{ display: 'block', margin: '8px 0', color: 'inherit', textDecoration: 'none' }}>Laboratorio</Link>
            <Link to="/taller" style={{ display: 'block', margin: '8px 0', color: 'inherit', textDecoration: 'none' }}>Taller</Link>
            <Link to="/liga-robotica" style={{ display: 'block', margin: '8px 0', color: 'inherit', textDecoration: 'none' }}>Liga robótica</Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: "var(--font-spartan)", fontSize: "1.5em" }}>
              Links de Interés
            </Typography>
            <hr style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px', margin: '10px 0' }} />
            <Link to="/formulario" style={{ display: 'block', margin: '8px 0', color: 'inherit', textDecoration: 'none' }}>Unite al club</Link>
            <Link to="/contacto" style={{ display: 'block', margin: '8px 0', color: 'inherit', textDecoration: 'none' }}>Formulario de contacto</Link>
            <Link to="/contacto#faq" style={{ display: 'block', margin: '8px 0', color: 'inherit', textDecoration: 'none' }}>Preguntas frecuentes</Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: "var(--font-spartan)", fontSize: "1.5em" }}>
              Contacto
            </Typography>
            <hr style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px', margin: '10px 0' }} />
            <Typography variant="body1" sx={{ fontFamily: "var(--font-spartan)", fontSize: "1.2em" }}><i className="fas fa-home mr-3"></i> Dirección: Italia 401 ¨b¨.</Typography>
            <Typography variant="body1" sx={{ fontFamily: "var(--font-spartan)", fontSize: "1.2em" }}><i className="fas fa-envelope mr-3"></i> info@example.com</Typography>
            <ReactWhatsapp
              number="549-2920-35-4587"
              message="Hola! Quisiera más información sobre Citecopa!"
              element="div"
              style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.3em', fontSize: '14px', cursor: "pointer" }}
            >
              <WhatsAppIcon /> <p style={{ fontFamily: "var(--font-spartan)", fontSize: "1.2em" }}>Whatsapp</p>
            </ReactWhatsapp>
            <Typography variant="body1" sx={{ fontFamily: "var(--font-spartan)", fontSize: "1em" }}><i className="fas fa-print mr-3"></i>2920-35-4587</Typography>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', py: 2 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © 2024 Copyright:
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}> Fundación Citecopa</Link>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
