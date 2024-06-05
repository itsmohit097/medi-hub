
import React from 'react';
import { Contributors, FAQSection, Hero, WhatIsMedihub, WhyUs, Testamonial, TopSpecialities } from "../import-export/ImportExport";


function Home() {
    return (
        <>
            <Hero />
            <WhyUs />
            <WhatIsMedihub/>
            <TopSpecialities/>
            <Testamonial/>
            <Contributors />
            <FAQSection />
        </>
    )
}

export default Home;
