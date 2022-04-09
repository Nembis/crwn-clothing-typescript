import { FC } from "react";
import { useSelector } from "react-redux";
import { CategoryPreview } from "../../components/category-preview/categeory-preview.component";
import { selectCategories } from "../../store/categories/category.selector";

interface CategoriesPreviewProps {}

export const CategoriesPreview: FC<CategoriesPreviewProps> = () => {
  const categories = useSelector(selectCategories);

  return (
    <>
      {Object.keys(categories).map((key) => {
        const products = categories[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </>
  );
};
