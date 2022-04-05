import { FC } from "react";
import "./directory-item.styles.scss";

interface CategoryItemProps {
  title: string;
  imageUrl: string;
}

export const DirectoryItem: FC<CategoryItemProps> = ({ title, imageUrl }) => {
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};
