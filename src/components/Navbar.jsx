import React, { useContext, useState } from "react";
import { TbShoppingBagHeart } from "react-icons/tb";
import { Link, useNavigate } from "react-router";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import DataContext from "../context/DataContext";

const Navbar = () => {

  const [searchTerm, setSearchTerm] = useState("")

  const {cart} = useContext(DataContext)

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm("")
  }

   

  return (
    <>
      <div
        className="navbar navbar-expand-lg navbar-dark
    bg-dark px-4 py-2 sticky-top shadow"
      >
        <div className="container-fluid">
          {/* Left section Logo */}
          <Link to={"/"} className="navbar-brand d-flex align-items-center">
            <TbShoppingBagHeart className="text-warning fs-2 me-2" />
            <span className="fs-4 fw-bold">Buy Buddy</span>
          </Link>

          <form className="d-flex mx-auto search-container"
          onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control search-input"
              placeholder="Search Products..."
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <button className="btn btn-warning search-button">
              <FaSearch />
            </button>
          </form>

          {/* categories */}
          <ul className="navbar-nav mx-auto d-flex gap-3">
            {["Mobiles", "Laptops", "Tablets", "Watches"].map((category) => (
              <li key={category} className="nav-items">
                <Link
                  to={`/product/category/${category}`}
                  className="nav-link category-link"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>

          {/* cart button */}
          <Link
            to={"/cart"}
            type="button"
            className="btn btn-warning position-relative
          cart-btn"
          >
            <FaShoppingCart className="fs-4"/>

            {cart.length > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>}
            
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
