import ProductDetailSection from "@/components/productDetails/ProductDetailSection";
import RouteBar from "@/components/nav/RouteBar";
import { useParams } from "react-router-dom";
// import NewestProducts from "@/components/products/NewestProducts";
// import ProductInfo from "@/components/productDetails/ProductInfo";

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
      {/* <ProductInfo /> */}
      {/* <NewestProducts/> */}
    </div>
  );
}
