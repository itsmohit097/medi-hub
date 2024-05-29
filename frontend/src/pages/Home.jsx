import React from 'react'
import { Contributors, Hero, WhatIsMedihub, WhyUs, } from "../import-export/ImportExport";

function Home() {
    return (
        <>
            <Hero />
            <WhyUs />
            <WhatIsMedihub/>
            <Contributors />
        </>
    )
}

export default Home