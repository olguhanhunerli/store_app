import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid
          key={product.id}
          xs={6}
          sm={6}
          md={4}
          lg={3}
          sx={{ backgroundColor: "primary.light", borderRadius: 1 }}
        >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
