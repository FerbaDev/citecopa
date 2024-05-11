import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import ReactWhatsapp from "react-whatsapp";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "300px",
          backgroundColor: "#1c1c1c",
          color: "whitesmoke",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBlock: "20px",
          }}
        >
          <Typography variant="h5" component="h2" align="center">
            Nos encontrás en:
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "2em" }} p={2}>
            <ReactWhatsapp
              number="549-3571-5x-xxxx"
              message="Hola xxx"
              element="div"
              className="cursor-manito"
            >
              <WhatsAppIcon style={{ fontSize: "3em" }} />
            </ReactWhatsapp>
            <Link
              to={"https://www.instagram.com/xxx/"}
              style={{ color: "whitesmoke" }}
            >
              <InstagramIcon style={{ fontSize: "3em" }} />
            </Link>
            <Link
              to={"https://wwww.facebook.com/xxx"}
              style={{ color: "whitesmoke" }}
            >
              <FacebookIcon style={{ fontSize: "3em" }} />
            </Link>
          </Box>
        </Box>
        <Box>
          <Typography variant="h5" component="h2" align="center">
            Dirección:
          </Typography>
          <Typography variant="h6" component="h2" align="center">
            xxx.
          </Typography>
        </Box>
      </Box>

      {/* footer talba  */}
      <Box
        sx={{
          backgroundColor: "black",
          width: "100%",
          display: "flex",
          justifyContent: "end",
          p: 2,
          color: "whitesmoke",
        }}
      >
        
          <Link to={"https://talbalabs.com.ar/"} className="talba">
            <span style={{ fontFamily: "monospace" }}> Talba Labs</span>
          </Link>
        
      </Box>
    </>
  );
};
