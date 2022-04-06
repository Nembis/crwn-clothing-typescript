import { FC, useContext } from "react";
import { CategoryContext } from "../../contexts/categories.context";
import { CategoryPreview } from "../../components/category-preview/categeory-preview.component";

interface CategoriesPreviewProps {}

export const CategoriesPreview: FC<CategoriesPreviewProps> = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <>
      {Object.keys(categories).map((key) => {
        const products = categories[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </>
  );
};
