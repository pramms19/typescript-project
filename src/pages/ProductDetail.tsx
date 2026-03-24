import ProductDetailSection from "@/components/ProductDetailSection";
import ProductInfo from "@/components/ProductInfo";
import RouteBar from "@/components/RouteBar";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  if (!id) {
    return <div>Invalid Product</div>;
  }
  const productId = Number(id);

  if (isNaN(productId)) {
    return <div>Invalid Product ID</div>;
  }

  return (
    <div>
      <RouteBar />
      <ProductDetailSection id={productId} />
      <ProductInfo />
    </div>
  );
}
