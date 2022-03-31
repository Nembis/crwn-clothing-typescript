import { FC } from "react";
import "./category-item.styles.scss";

interface CategoryItemProps {
  title: string;
  imageUrl: string;
}

export const CategoryItem: FC<CategoryItemProps> = ({ title, imageUrl }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};
