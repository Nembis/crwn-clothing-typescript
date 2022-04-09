import { FC } from "react";
import { CategoryItems } from "../../contexts/categories.context";
import { ProductCard } from "../product-card/product-card.component";
import {
  CategorPreviewContainer,
  Preview,
  Title,
} from "./category-preview.styles";

interface CategoryPreviewProps {
  title: string;
  products: CategoryItems[];
}

export const CategoryPreview: FC<CategoryPreviewProps> = ({
  title,
  products,
}) => {
  return (
    <CategorPreviewContainer>
      <h2>
        <Title to={title}>{title}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategorPreviewContainer>
  );
};
