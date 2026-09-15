"use client";

import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const handleCategorySelect = (subCategoryName) => {
        setSelectedCategory(subCategoryName);
    };
    const handleSearchChange = (value) => {
        setSearchValue(value);
    };

    return (
        <CategoryContext.Provider
            value={{
                selectedCategory,
                handleCategorySelect,
                handleSearchChange,
                searchValue
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
}

export function useCategory() {
    return useContext(CategoryContext);
}