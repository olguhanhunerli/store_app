import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductItem from "../components/ProductItem";
import Loading from "../components/Loading";
import request from "../api/apiClient";

export default function ProductsDetailsPage() {
  const { productid } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const data = await request.products.details(productid);
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProductDetails();
  }, [productid]);

  if (loading) {
    return <Loading message="Yükleniyor" />;
  }
  if (!product) {
    return <div>Ürün bulunamadı</div>;
  }
  return <ProductItem product={product} />;
}
