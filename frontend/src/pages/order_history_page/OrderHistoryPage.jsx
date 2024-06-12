import React from "react";
import { ProductCard } from "../../import-export/ImportExport";
import { useState } from "react";

function OrderHistoryPage() {
  const orders = [
    {
      productImage:
        "https://assets.ajio.com/medias/sys_master/root/20240425/mtnE/662a4cb916fd2c6e6ad1a579/-473Wx593H-464678722-blue-MODEL.jpg",
      productName: "Tistabene Self-Design Shirt",
      size: "L",
      price: 1199,
      status: "Delivered",
      date: "Dec 16, 2023",
      isDelivered: true,
    },
    {
      productImage:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1aed14ed4d894187a95fafc40145c462_9366/LC_Flower_Hoodie_Green_II5968_21_model.jpg",
      productName: "LC Flower Hoodie",
      size: "L",
      price: 3999,
      status: "Delivered",
      date: "Oct 06, 2023",
      isDelivered: true,
    },
    {
      productImage:
        "https://cdn.pixelspray.io/v2/black-bread-289bfa/woTKH5/wrkr/t.resize(h:1000,w:820)/data/Superdry/28112022img/410330327001_1.jpg",
      productName: "Vintage leather jacket",
      size: "XL",
      price: 6899,
      status: "Cancelled",
      date: "Oct 02, 2023",
      isDelivered: false,
    },
  ];

  const [searchInput, setSearchInput] = useState("");
  const [SearchOrderProduct, setSearchOrderProduct] = useState(orders);

  function FilterData(searchInput, orders) {
    const filteredData = orders.filter((orders) =>
      orders.productName.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filteredData;
  }
  const handleSearch = () => {
    const data = FilterData(searchInput, orders);
    setSearchOrderProduct(data);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-100 p-4">
      <header className="bg-white p-4 rounded text-center mb-4 shadow">
        <h1 className="text-black-900 text-2xl md:font-semibold">Order Page</h1>
      </header>
      <main className="max-w-7xl mx-auto">
        {/* <SearchBar /> */}
        <div className="mb-4 flex">
          <input
            type="text"
            placeholder="Search your orders here"
            className="w-full lg:w-5/6 pl-10 border rounded"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            onKeyDown={handleKeyPress}
          />
          <button
            className="ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            onClick={handleSearch}
          >
            Search Orders
          </button>
        </div>

        {/* Ordered products list */}
        {SearchOrderProduct.map((order, index) => (
          <ProductCard key={index} order={order} />
        ))}
      </main>
    </div>
  );
}

export default OrderHistoryPage;
