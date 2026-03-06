import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductItem from "../components/ProductItem";
import Loading from "../components/Loading";

export default function ProductsDetaislPage() {
  const { productsid } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const res = await fetch("http://localhost:5000/products/" + productsid);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    fetchProductDetails();
  }, [productsid]);

  if (loading) {
    return <Loading message="Yükleniyor" />;
  }

  return <ProductItem product={product} />;
}
