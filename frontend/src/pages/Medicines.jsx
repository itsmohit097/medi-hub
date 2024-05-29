import React, { useEffect, useState } from "react";
import { Category } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import {
  AddtoUserCart,
  SearchMedicines,
  getHighDiscountMedicines,
} from "../Api";
import { ToastContainer, toast } from "react-toastify";
import { Pagination, MedicineCard } from "../import-export/ImportExport";

function Medicines() {
  const [page, setpage] = useState(1);
  const [medicines, setMedicines] = useState([]);
  const navigate = useNavigate();
  const [Search, setSearch] = useState("");

  const HandleSearch = () => {
    if (Search === "") {
      handlePageChange();
    }
    SearchMedicines(Search)
      .then((res) => {
        console.log(res);
        setMedicines(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };

  const handlePageChange = (page) => {
    getHighDiscountMedicines(page)
      .then((res) => {
        console.log(res);
        setMedicines(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };
  useEffect(() => {
    HandleSearch();
  }, [Search]);
  useEffect(() => {
    handlePageChange();
  }, [navigate]);

  return (
    <div className="w-full min-h-screen my-16">
      <ToastContainer />
      <section className="bg-dark_theme min-h-64 flex justify-center items-center flex-col gap-5">
        <h1 className="text-4xl font-bold text-white">
          Buy Medicines and Essentials
        </h1>
        <div className="w-6/12 mx-auto">
          <div className="relative flex items-center w-full h-16 rounded-xl focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              onChange={(event) => setSearch(event.target.value)}
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search medicines.."
            />
          </div>
        </div>
      </section>

      {/* Search function */}
      {Search ? (
        <div className="container min-h-40 mx-auto mt-5">
          <h2 className="text-2xl font-semibold mb-4">Search Result</h2>
          {medicines.length === 0 && (
            <h2 className="text-2xl font-semibold mb-4">No Result Found</h2>
          )}
          <MedicineCard products={medicines} />
        </div>
      ) : (
        <>
          <section className="container max-w-7xl mx-auto min-h-40 mt-5 px-3 py-1">
            <h2 className="text-2xl text-dark_theme font-semibold mb-4">
              Shop by Category
            </h2>
            <div className="grid grid-cols-2 justify-items-center md:grid-cols-4 lg:grid-cols-6 gap-5">
              {Category.map((category, index) => (
                <Link key={index} to={`/shop-by-category${category.Url}`}>
                  <div className="w-[177px] h-[227px] flex flex-col items-center justify-between">
                    {/* image container */}
                    <div className="relative w-full h-full px-2 py-2 overflow-hidden rounded-md shadow-sm bg-gray-300 backdrop-filter backdrop-blur-md bg-opacity-10">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-center object-fill transition duration-300 ease-in-out transform hover:scale-105 mix-blend-multiply"
                        loading="lazy"
                      />
                    </div>
                    <h2 className="text-xl text-dark_theme font-medium text-center mt-3">
                      {category.name}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          <div className="container max-w-7xl mx-auto min-h-40 mt-5">
            <h2 className="text-2xl font-semibold mb-4">On High Discount</h2>
            <MedicineCard products={medicines} />
          </div>
          <Pagination
            currentPage={1}
            totalPages={12}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}
export default Medicines;
