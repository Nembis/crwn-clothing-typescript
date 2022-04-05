import { FC, createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export interface CategoryItems {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface CategoryContextType {
  categories: {
    [key: string]: CategoryItems[];
  };
}

export const CategoryContext = createContext<CategoryContextType>({
  categories: {},
});

export const ProductsProvider: FC<{}> = ({ children }) => {
  const [categories, setCategories] = useState<
    CategoryContextType["categories"]
  >({});
  const value = { categories };

  useEffect(() => {
    const getCollectionsMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategories(() => categoryMap);
    };

    getCollectionsMap();
  }, []);

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
