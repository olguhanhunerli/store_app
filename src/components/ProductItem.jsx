import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
export default function ProductItem({ product }) {
  return (
    <Grid container spacing={2}>
      <Grid size={{ lg: 4, md: 5, xs: 12 }}>
        <Paper variant="outlined" sx={{ p: 3 }}>
          <img
            src={`http://localhost:5000/images/${product.image}`}
            style={{ width: "100%" }}
          />
        </Paper>
      </Grid>
      <Grid size={{ lg: 8, md: 7, xs: 12 }}>
        <Paper variant="outlined" sx={{ p: 3 }}>
          <Typography
            component="h1"
            variant="h4"
            gutterBottom
            color="secondary.dark"
          >
            {product.name}
          </Typography>
          <Typography variant="body1">{product.description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
