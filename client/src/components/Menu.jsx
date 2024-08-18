import { motion } from "framer-motion";
import React, { useState } from "react";
import { staggerFadeInOut } from "../animations";
import { IoFastFood } from "../assets/icons";
import { statuses } from "../utils/style";
import SliderCard from "./SliderCard";
import { useSelector } from "react-redux";
import {Header} from "../components";

const Menu = () => {
  const [category, setCategory] = useState("fruits");
  const products = useSelector((state) => state.products);
  return (
    <main className="min-h-screen flex items-center justify-start flex-col bg-primary" style={{width:"98.7vw"}}>
      <Header />
      <div className="w-full flex flex-col items-start justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
        {/* <Home /> */}
    <motion.div className="w-full flex items-start justify-start flex-col">
      <div className="w-full overflow-x-scroll pt-6 flex items-center justify-center gap-6 py-8">
        {statuses &&
          statuses.map((data, i) => (
            <FilterCard
              data={data}
              category={category}
              setCategory={setCategory}
              index={i}
            />
          ))}
      </div>

      <div className="w-full flex items-center justify-evenly flex-wrap gap-4 mt-12">
        {products &&
          products
            .filter((data) => data.product_category === category)
            .map((data, i) => <SliderCard key={i} data={data} index={i} />)}
      </div>
    </motion.div>
    </div>
    </main>
  );
};

export const FilterCard = ({ data, index, category, setCategory }) => {
  return (
    <motion.div
      key={index}
      {...staggerFadeInOut(index)}
      onClick={() => setCategory(data.category)}
      className={`group w-28 min-w-[128px] cursor-pointer rounded-md py-6 ${
        category === data.category ? "bg-red-500" : "bg-primary"
      } hover:bg-red-500 shadow-md flex flex-col items-center justify-center gap-4 `}
    >
      <div
        className={`w-10 h-10 rounded-full shadow-md flex items-center justify-center group-hover:bg-primary ${
          category === data.category ? "bg-primary" : "bg-red-500"
        }`}
      >
        <IoFastFood
          className={`${
            category === data.category ? "text-red-500" : "text-primary"
          } group-hover:text-red-500`}
        />
      </div>
      <p
        className={`text-xl font-semibold ${
          category === data.category ? "text-primary" : "text-textColor"
        }`}
      >
        {data.title}
      </p>
    </motion.div>
  );
};

export default Menu;
