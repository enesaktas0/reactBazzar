import React from "react";
import Filter from "../../ui/Filter";
import { useCategories } from "../../hooks/useCategories";

export default function ProductOperations() {
  const { categories, isLoading } = useCategories();

  if (isLoading) return null;

  if (!categories) return null;

  return (
    <div>
      <Filter options={categories} fieldName={"category"} />
    </div>
  );
}
