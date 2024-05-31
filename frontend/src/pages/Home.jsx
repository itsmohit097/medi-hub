import React from 'react'
import { Contributors, Hero, WhatIsMedihub, WhyUs, FAQSection} from "../import-export/ImportExport";

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