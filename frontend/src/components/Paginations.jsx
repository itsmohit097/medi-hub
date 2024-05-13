import { ChevronLeft, ChevronRight } from "lucide-react";

const PageItem = ({ page, currentPage, onPageChange }) => {
    const isActive = page === currentPage;
    const baseClasses = "relative inline-flex items-center px-4 py-2 text-sm font-medium cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10";
    const inactiveClasses = "bg-white text-gray-700 border border-fuchsia-100 hover:bg-green-500 hover:text-text";
    const activeClasses = "bg-gradient-to-r from-green-500 to-green-700 text-white border border-fuchsia-100 hover:border-violet-100";
  
    return (
      <a
        href="#"
        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
        onClick={() => onPageChange(page)}
      >
       {page === "Previous" ? <ChevronLeft/> : page === "Next" ? <ChevronRight/> : page}
      </a>
    );
  };
  
  const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    let startPage = Math.max(currentPage - 1, 1);
  let endPage = Math.min(startPage + 2, totalPages);

  // Adjust the start page if we're close to the end
  if (endPage - startPage < 2) {
    startPage = Math.max(endPage - 2, 1);
}
    const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    return (
      <div className="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-center">
          <nav className="flex space-x-2" aria-label="Pagination">
            <PageItem page="Previous" currentPage={currentPage} onPageChange={onPageChange} />
            {pages.map(page => (
              <PageItem key={page} page={page} currentPage={currentPage} onPageChange={onPageChange} />
            ))}
            <PageItem page="Next" currentPage={currentPage} onPageChange={onPageChange} />
          </nav>
        </div>
      </div>
    );
  };

  export default Pagination