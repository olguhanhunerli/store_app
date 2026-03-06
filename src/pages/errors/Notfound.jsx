import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";

export default function NotFoundErrorPage() {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
          Aradığınız Sayfa Bulunamadı
        </Typography>
        <Button component={Link} variant="contained" sx={{ mt: 2 }} to="/">
          Anasayfaya Dön
        </Button>
      </Box>
    </>
  );
}
