/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Cart, FilterSection, Header, Home, HomeSlider } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api";
import { setAllProducts } from "../context/actions/productActions";

const Main = () => {
  const products = useSelector((state) => state.products);
  const isCart = useSelector((state) => state.isCart);
  const dispatch =useDispatch()

  useEffect(() => {
    if(!products){
      getAllProducts().then(data => {
        dispatch(setAllProducts(data))
      })
    }
  },[])
  return (
    <main className="min-h-screen flex items-center justify-start flex-col bg-primary" style={{width:"98.7vw"}}>
      <Header />
      <div className="w-full flex flex-col items-start justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
        <Home />
        <HomeSlider />
        <div id="menu">
        <FilterSection />
        </div>
      </div>

      {isCart && <Cart />}
    </main>
  );
};

export default Main;
