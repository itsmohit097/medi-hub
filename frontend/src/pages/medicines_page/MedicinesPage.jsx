import React from "react";

import {
  SearchMedicines,
  ShopByCategory,
  ShopByBrand,
  HotSellers,
  ShopByDiscount,
} from "../../import-export/ImportExport";

function MedicinesPage() {
  return (
    <main className="w-full">
      <SearchMedicines />
      <section className="max-w-7xl mx-auto">
        <ShopByCategory />
        <ShopByBrand />
        <HotSellers />
        {/* Banners */}
        <ShopByDiscount />
      </section>
    </main>
  );
}
export default MedicinesPage;
