import React, { useState } from "react";
import CategoryList from "./CategoryList";
import allCategory from "../../Assets/all-category.jpg";
import homeCategory from "../../Assets/home-category.jpg";
import movingCategory from "../../Assets/moving-category.jpg";
import laundryCategory from "../../Assets/laundry-category.jpg";
import foodCategory from "../../Assets/food-category.jpg";
import shoppingCategory from "../../Assets/shopping-category.jpg";

export default function CategoryPage() {
  const [categories, setCategories] = useState([
    {
      category: "All",
      picture: allCategory,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      category: "Home",
      picture: homeCategory,
      desc: "sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      category: "Moving",
      picture: movingCategory,
      desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint ",
    },
    {
      category: "Laundry",
      picture: laundryCategory,
      desc: "illo inventore veritatis et quasi architecto beatae",
    },
    {
      category: "Food",
      picture: foodCategory,
      desc:
        "dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia",
    },
    {
      category: "Shopping",
      picture: shoppingCategory,
      desc:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit",
    },
  ]);

  return (
    <>
      <h2>Choose Category</h2>
      <div className="container">
        <div className="row">
          {categories.map((category) => {
            return <CategoryList category={category} />;
          })}
        </div>
      </div>
    </>
  );
}
