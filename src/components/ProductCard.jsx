import {
  Button,
  CardActionArea,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router";
import { currensyTRY } from "../utils/formats";
export default function ProductCard({ product }) {
  return (
    <Card>
      <CardActionArea component={Link} to={`/products/${product.id}`}>
        <CardMedia
          sx={{ height: 160, backgroundSize: "contain" }}
          image={`http://localhost:5000/images/${product.image}`}
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
            {currensyTRY.format(product.price)}{" "}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton>
          {/* <FavoriteIcon color="error" /> */}
          <FavoriteBorderIcon color="" />
        </IconButton>
        <Button>Sepete Ekle</Button>
      </CardActions>
    </Card>
  );
}
