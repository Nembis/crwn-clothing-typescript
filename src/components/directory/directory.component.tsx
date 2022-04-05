import { FC } from "react";
import { DirectoryItem } from "../directory-item/directory-item.component";
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
        <DirectoryItem key={id} imageUrl={imageUrl} title={title} />
      ))}
    </div>
  );
};
