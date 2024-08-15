import React from "react";
import Intro from "../ui/Intro";
import ProductsMain from "../features/product/ProductsMain";
import ProductOperations from "../features/product/ProductOperations";

export default function Products() {
  return (
    <div>
      <Intro
        type={"products"}
        header={"Dicover and Save"}
        title={
          "ReactBazzar : Your Ultimate Destination for Quantity and Affordable Shopping!"
        }
      />
      <ProductOperations />
      <ProductsMain />
    </div>
  );
}
