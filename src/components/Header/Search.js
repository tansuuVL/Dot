import React from "react";
import { useProducts } from "../../contexts/ProductsContext";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import MyLink from "../../shared/MyLink";
import "./Search.css";

const Search = () => {
  const { searchResults } = useProducts();
  const navigate = useNavigate();

  const goToProductDetails = (productId) => {
    navigate(`/product/${productId}`);
  };
  //   console.log(searchResults);
  return (
    <>
      <div className="search-box">
        {searchResults.length &&
          searchResults.map((item) => (
            <p
              onClick={() => {
                goToProductDetails(item.id);
              }}
            >
              {item.title}
            </p>
          ))}
      </div>
    </>
  );
};

export default Search;
