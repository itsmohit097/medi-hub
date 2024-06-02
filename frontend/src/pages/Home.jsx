
import React from 'react';
import { Contributors, FAQSection, Hero, WhatIsMedihub, WhyUs, Testamonial, TopSpecialities } from "../import-export/ImportExport";
import Stats from './Stats';

function Home() {
    return (
        <>
            <Hero />
            <WhyUs />
            <WhatIsMedihub/>
            <Stats></Stats>
            <TopSpecialities/>
            <Testamonial/>
            <Contributors />
            <FAQSection />
        </>
    )
}

export default Home;
