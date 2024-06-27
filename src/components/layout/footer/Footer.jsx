// import { Link } from "react-router-dom";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import ReactWhatsapp from "react-whatsapp";
// import { Box } from "@mui/material";
// import "../../../index.css"

// export const Footer = () => {
//   return (
//     <>
//       <Box
//         sx={{
//           width: "100%",
//           minHeight: "300px",
//           backgroundColor: "#1c1c1c",
//           color: "whitesmoke",
//         }}
//       >
//         <Box
//           sx={{
//             width: "100%",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             paddingBlock: "20px",
//           }}
//         >
//           <h2 style={{fontFamily: "var(--font-spartan)"}}>
//             Nos encontrás en:
//           </h2>
//           <Box sx={{ display: "flex", flexDirection: "row", gap: "2em" }} p={2}>
//             <ReactWhatsapp
//               number="549-2920-35-4587"
//               message="Hola! Quisiera mas info sobre Citecopa!"
//               element="div"
//               className="cursor-manito"
//             >
//               <WhatsAppIcon style={{ fontSize: "3em" }} />
//             </ReactWhatsapp>
//             <Link
//               to={"https://www.instagram.com/linkclubdecienciasviedma/"}
//               style={{ color: "whitesmoke" }}
//             >
//               <InstagramIcon style={{ fontSize: "3em" }} />
//             </Link>
//           </Box>
//         </Box>
//         <Box>
//           <h2 style={{fontFamily: "var(--font-spartan)", textAlign: "center"}}>
//             Dirección: Italia 401 ¨b¨.
//           </h2>
//           <h3 style={{fontFamily: "var(--font-spartan)", textAlign: "center"}}>
//             Viedma, Río Negro 
//           </h3>
//         </Box>
//       </Box>

//       {/* footer talba  */}
//       <Box
//         sx={{
//           backgroundColor: "black",
//           width: "100%",
//           display: "flex",
//           justifyContent: "end",
//           p: 2,
//           color: "whitesmoke",
//         }}
//       >
//         <p>Tienda desarrollada por</p>
//           <Link to={"https://talbalabs.com.ar/"} className="talba">
//             <span style={{ fontFamily: "monospace" }}> Talba Labs</span>
//           </Link>
        
//       </Box>
//     </>
//   );
// };

import { Box, Typography, Container, Grid, Link } from '@mui/material';
import { Instagram, Facebook, Twitter, Google, LinkedIn, GitHub } from '@mui/icons-material';
import ReactWhatsapp from 'react-whatsapp';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1c2331', color: 'whitesmoke', mt: 5 }}>
      <Box sx={{ backgroundColor: '#6351ce', py: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body1">
              Get connected with us on social networks:
            </Typography>
            <Box>
              <Link href="#" color="inherit" sx={{ mx: 1 }}>
                <Facebook />
              </Link>
              <Link href="#" color="inherit" sx={{ mx: 1 }}>
                <Twitter />
              </Link>
              <Link href="#" color="inherit" sx={{ mx: 1 }}>
                <Google />
              </Link>
              <Link href="https://www.instagram.com/linkclubdecienciasviedma/" color="inherit" sx={{ mx: 1 }}>
                <Instagram />
              </Link>
              <Link href="#" color="inherit" sx={{ mx: 1 }}>
                <LinkedIn />
              </Link>
              <Link href="#" color="inherit" sx={{ mx: 1 }}>
                <GitHub />
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Fundación Citecopa
            </Typography>
            <hr style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px', margin: '10px 0' }} />
            <Typography variant="body2">
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Products
            </Typography>
            <hr style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px', margin: '10px 0' }} />
            <Link href="#!" color="inherit" sx={{ display: 'block', my: 1 }}>MDBootstrap</Link>
            <Link href="#!" color="inherit" sx={{ display: 'block', my: 1 }}>MDWordPress</Link>
            <Link href="#!" color="inherit" sx={{ display: 'block', my: 1 }}>BrandFlow</Link>
            <Link href="#!" color="inherit" sx={{ display: 'block', my: 1 }}>Bootstrap Angular</Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Redes Sociales
            </Typography>
            <hr style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px', margin: '10px 0' }} />
            <ReactWhatsapp style={{display: "flex", flexDirection: "row", alignItems: "center"}}
              number="549-2920-35-4587"
              message="Hola! Quisiera mas info sobre Citecopa!"
              element="div"
              className="cursor-manito"
            >
              <WhatsAppIcon /> Whatsapp 
            </ReactWhatsapp>
            <Link href="#!" color="inherit" sx={{ display: 'block', my: 1 }}>Become an Affiliate</Link>
            <Link href="#!" color="inherit" sx={{ display: 'block', my: 1 }}>Shipping Rates</Link>
            <Link href="#!" color="inherit" sx={{ display: 'block', my: 1 }}>Help</Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Contact
            </Typography>
            <hr style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px', margin: '10px 0' }} />
            <Typography variant="body2"><i className="fas fa-home mr-3"></i> New York, NY 10012, US</Typography>
            <Typography variant="body2"><i className="fas fa-envelope mr-3"></i> info@example.com</Typography>
            <Typography variant="body2"><i className="fas fa-phone mr-3"></i> + 01 234 567 88</Typography>
            <Typography variant="body2"><i className="fas fa-print mr-3"></i> + 01 234 567 89</Typography>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', py: 2 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © 2020 Copyright: 
            <Link href="https://mdbootstrap.com/" color="inherit"> MDBootstrap.com</Link>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};


