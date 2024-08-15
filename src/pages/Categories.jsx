import React from "react";
import Intro from "../ui/Intro";
import ShowCategories from "../features/categories/ShowCategories";

export default function Categories() {
  return (
    <div>
      <Intro
        type={"categories"}
        header={"Easy Shoping"}
        title={"More Savings"}
      />
      <ShowCategories title={"Our Categories"} />
    </div>
  );
}
