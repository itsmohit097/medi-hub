import React from 'react';
import { Contributors, FAQSection, Hero, WhatIsMedihub, WhyUs, Testamonial } from "../import-export/ImportExport";

function Home() {
    return (
        <>
            <Hero />
            <WhyUs />
            <WhatIsMedihub/>
            <Testamonial/>
            <Contributors />
            <FAQSection />
        </>
    )
}

export default Home;
