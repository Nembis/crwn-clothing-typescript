import { FC } from "react";
import { CategoryItem } from "../category-item/category-item.component";
import "./directory.styles.scss";

interface DirectoryProps {
  categories: {
    id: number;
    title: string;
    imageUrl: string;
  }[];
}

export const Directory: FC<DirectoryProps> = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ id, title, imageUrl }) => (
        <CategoryItem key={id} imageUrl={imageUrl} title={title} />
      ))}
    </div>
  );
};
