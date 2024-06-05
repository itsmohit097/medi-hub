import React from "react";

const ProductCard = ({ order }) => {
  const { productImage, productName, size, price, status, date, isDelivered } =
    order;
  return (
    <div className="border rounded-lg p-6 mb-5 flex items-start bg-white ">
      <div className="flex-shrink-0">
        <img
          src={productImage}
          alt="Product"
          className="w-24 h-24 object-cover rounded "
        />
      </div>
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold">{productName}</h3>
        <p className="text-gray-600 mr-10">size : {size}</p>
      </div>
      <p className="text-gray-600 mr-60 ">₹{price}</p>
      <div className="text-right">
        <p
          className={`font-semibold ${
            isDelivered ? "text-green-500" : "text-red-500"
          }`}
        >
          {status} on {date}
        </p>
        <p className="text-gray-600">
          {isDelivered
            ? "Your item has been delivered"
            : "Your item has been cancelled"}
        </p>
        {isDelivered && (
          <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700">
            Rate & Review Product
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
