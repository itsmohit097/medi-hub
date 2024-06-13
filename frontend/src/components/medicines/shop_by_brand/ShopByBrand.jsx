import React from "react";
import { Link } from "react-router-dom";
import { Category } from "../../../constants";

export default function ShopByBrand() {
  return (
    <section className="space-y-4 my-20">
      <div className="px-3 md:px-4 lg:px-6 py-2">
        <h2 className="text-lg md:text-xl lg:text-2xl text-dark_theme font-semibold">
          Shop by Brand
        </h2>
      </div>

      {/* cards section */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  justify-items-center gap-6 px-3 md:px-4 lg:px-6 py-2">
        {Category.map((category, index) => (
          <Link key={index} to={`/shop-by-category${category.Url}`}>
            <div className="w-[127px] h:[137px] md:w-[157px] md:h-[167px] xl:w-[177px] xl:h-[207px] flex flex-col items-center justify-center border border-text_grey/40 rounded-md">
              {/* image container */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-center object-fill mix-blend-multiply transition duration-300 ease-in-out shadow-sm transform hover:scale-105 hover:shadow-md"
                  loading="lazy"
                />
              </div>
              <h2 className="sm:text-base md:text-lg lg:text-xl text-dark_theme font-medium text-center mt-3">
                {category.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
