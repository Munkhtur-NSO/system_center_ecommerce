import BaseLayout from "@/layout/baseLayout";
import { getAllCategory } from "@/utils/category";
import { getAllCategory_axios } from "@/utils/category";
import { useEffect, useState } from "react";

export default function Contact() {
  const [categories, setCategories] = useState(null); // Initialize as null

  async function fetchCategories() {
    try {
      const categoryIdData = await getAllCategory_axios();
      console.log("categoryIdData", categoryIdData);
      setCategories(categoryIdData);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  function renderCategories() {
    if (categories === null) {
      return null; // If categories are null, return nothing
    }

    return (
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <BaseLayout>contact</BaseLayout>
      <p>hi contact</p>
      <button onClick={fetchCategories}>Click Me!</button>
      <button onClick={() => setCategories([])}>Clear</button>
      {renderCategories()} {/* Render the categories */}
    </>
  );
}
