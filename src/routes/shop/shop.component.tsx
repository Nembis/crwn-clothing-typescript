import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { setCategories } from "../../store/categories/category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { CategoriesPreview } from "../categories-preview/categories-preview.component";
import { Category } from "../category/category.component";

interface ShopProps {}

export const Shop: FC<ShopProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCollectionsMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategories(categoryMap));
    };

    getCollectionsMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
