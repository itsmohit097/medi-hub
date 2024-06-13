import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../../../constants";
import {
  SkeletonLoading,
  useLoading,
  Pagination,
} from "../../../import-export/ImportExport";

export default function ProductsByCategory() {
  const { id: category } = useParams();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6); // Number of products per page
  const loading = useLoading(1000);

  useEffect(() => {
    // Filter products based on the category
    const filteredProducts = Products.filter(
      (product) => product.category === category
    );
    setProducts(filteredProducts);
  }, [category]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Capitalize the first letter of the category name
  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <section className="space-y-4 my-20 max-w-7xl mx-auto">
      <div className="px-3 md:px-4 lg:px-6 py-2 inline-flex">
        <h2 className="text-lg md:text-xl lg:text-2xl text-dark_theme font-semibold">
          {formattedCategory}
        </h2>
      </div>

      {/* Product cards section */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-items-center gap-6 px-3 md:px-4 lg:px-6 py-2">
        {loading ? (
          // Render skeleton loading effect for each product card
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonLoading key={index} type="product" />
          ))
        ) : currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div
              key={product.id}
              className="w-[127px] h-[137px] md:w-[157px] md:h-[167px] xl:w-[177px] xl:h-[207px] flex flex-col items-center justify-center border border-text_grey/40 rounded-md"
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-fill mix-blend-multiply transition duration-300 ease-in-out shadow-sm transform hover:scale-105 hover:shadow-md"
                  loading="lazy"
                />
              </div>
              <h2 className="sm:text-base md:text-lg lg:text-xl text-dark_theme font-medium text-center mt-3 mb-2">
                {product.name}
              </h2>
              <p className="text-sm text-gray-600 mt-1">{product.price}</p>
              <p className="text-sm mt-1 text-center">{product.description}</p>
            </div>
          ))
        ) : (
          <p className="text-lg text-center col-span-full">
            No products found in this category.
          </p>
        )}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / productsPerPage)}
        onPageChange={paginate}
      />
    </section>
  );
}
