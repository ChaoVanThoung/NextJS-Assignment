import DisplayProductComponent from "@/components/products/DisplayProductComponent";
import FetchCar from "@/lib/api";
import { CarData } from "@/lib/car-type";
import React from "react";


const ProductPage = async () => {
  const data: CarData[] = await FetchCar(0, 5);
  console.log(data);
  return (
    <div>
      {/* <SWRComponent/> */}
      <DisplayProductComponent
        tagline={"Latest Updates"}
        heading={"New Comming"}
        description={
          "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights."
        }
        buttonText={"View all cars"}
        buttonUrl={""}
        posts={data}
      />
    </div>
  );
};

export default ProductPage;
