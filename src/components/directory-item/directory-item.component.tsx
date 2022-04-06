import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  Body,
  BackgroundImage,
  DirectoryItemContainer,
} from "./directory-item.styles";

interface CategoryItemProps {
  title: string;
  imageUrl: string;
  route: string;
}

export const DirectoryItem: FC<CategoryItemProps> = ({
  title,
  imageUrl,
  route,
}) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
