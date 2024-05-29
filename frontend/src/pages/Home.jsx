import React from 'react'
import { Contributors, Hero, WhyUs,WhatIsMedihub } from "../import-export/ImportExport";

function Home() {
    return (
      <>
        <Hero />
        <WhyUs />
        <WhatIsMedihub />
        <Contributors />
      </>
    );
}

export default Home