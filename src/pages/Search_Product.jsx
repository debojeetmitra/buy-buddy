import React from "react";
import { useParams } from "react-router";
import { items } from "../context/Data";
import Products from "../components/Products";

const Search_Product = () => {
  const { term } = useParams();

  const searchProducts = items.filter((pro) =>
    pro.title.toLowerCase().includes(term.toLowerCase())
  );
  return <div>
    <Products items={searchProducts} />
    </div>;
};

export default Search_Product;
