import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router";

const Cart = () => {
  const { cart , setCart } = useContext(DataContext);
  return (
    <>
      <div className="container my-5">
        {cart.length == 0 ? (
          <div className="text-center">
            <h1>Your Cart is Empty</h1>
            <Link to={"/"} className="btn btn-warning mt-3">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="row d-flex justify-content-center">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="col-lg-8
          col-md-10 my-3"
                >
                  <div className="card cart-card">
                    <div className="row g-0 align-items-center">
                      <div className="col-md-4 d-flex justify-content-center">
                        <img
                          src={product.imgSrc}
                          alt="w"
                          className="cart-img"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body text-center">
                          <h3 className="product-title">{product.title}</h3>
                          <p className="product-description">
                            {product.description}
                          </p>
                          <p className="product-price">{product.price} ₹</p>
                          <div className="button-group">
                            <button className="btn add-to-cart">Buy Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center my-5">
              <button className="btn btn-warning mx-2">Check Out</button>
              <button onClick={()=>setCart([])}className="btn btn-danger mx-2">Clear Cart</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
