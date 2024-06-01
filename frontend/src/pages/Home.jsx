import React from 'react'
import { Contributors, FAQSection, Hero, WhatIsMedihub, WhyUs} from "../import-export/ImportExport";

function Home() {
    return (
        <>
            <Hero />
            <WhyUs />
            <WhatIsMedihub/>
            <Contributors />
            <FAQSection />
        </>
    )
}

export default Home