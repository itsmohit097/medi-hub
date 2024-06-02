import React from 'react'
import { Contributors, Hero, WhatIsMedihub, WhyUs, Testamonial } from "../import-export/ImportExport";

function Home() {
    return (
        <>
            <Hero />
            <WhyUs />
            <WhatIsMedihub/>
            <Testamonial/>
            <Contributors />
        </>
    )
}

export default Home