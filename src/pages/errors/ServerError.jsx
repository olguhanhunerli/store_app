import { Alert, Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useLocation } from "react-router";
import { Link } from "react-router";

export default function ServerErrorPage() {
  const { state } = useLocation();
  return (
    <Paper sx={{ p: 3 }}>
      {state?.error ? (
        <>
          <Typography variant="h4" gutterBottom>
            {state.error.message} - {state.status}
          </Typography>
          <Alert severity="error">
            {state.error.details || "Bilinmeyen Bir Hata Oluştu"}
          </Alert>
        </>
      ) : (
        <>
          <Typography variant="h4" gutterBottom>
            Server Error
          </Typography>
          <Alert severity="error">
            {state.error.details || "Bilinmeyen Bir Hata Oluştu"}
          </Alert>
        </>
      )}
      <Button component={Link} variant="contained" sx={{ mt: 2 }} to="/">
        Anasayfaya Dön
      </Button>
    </Paper>
  );
}
