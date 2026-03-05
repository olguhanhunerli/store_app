import { CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function ProductCard({ product }) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 160, backgroundSize: "contain" }}
        image={`http://localhost:5000/images/${product.image}
        `}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          color="primary.dark"
        >
          {product.title}
        </Typography>
        <Typography variant="body1" color="secondary.dark">
          {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
}
