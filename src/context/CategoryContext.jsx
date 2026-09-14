"use client";

import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategorySelect = (subCategoryName) => {
        setSelectedCategory(subCategoryName);
    };

    return (
        <CategoryContext.Provider
            value={{
                selectedCategory,
                handleCategorySelect,
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
}

export function useCategory() {
    return useContext(CategoryContext);
}