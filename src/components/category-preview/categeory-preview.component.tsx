import { FC } from "react";
import { Link } from "react-router-dom";
import "./category-preview.styles.scss";
import { CategoryItems } from "../../contexts/categories.context";
import { ProductCard } from "../product-card/product-card.component";

interface CategoryPreviewProps {
  title: string;
  products: CategoryItems[];
}

export const CategoryPreview: FC<CategoryPreviewProps> = ({
  title,
  products,
}) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          {title}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
