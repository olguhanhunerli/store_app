import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Loading from "../components/Loading";
import request from "../api/apiClient";
export default function ProductsPage() {
  const [loadedProducts, setLoadedProducts] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await request.products.list();
        setLoadedProducts(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <Loading message="Yükleniyor" />;

  return <ProductList products={loadedProducts} />;
}
