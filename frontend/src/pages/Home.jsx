import React from 'react'
import { Contributors, Hero, WhatIsMedihub, WhyUs, Testamonial , TopSpecialities} from "../import-export/ImportExport";

function Home() {
    return (
        <>
            <Hero />
            <WhyUs />
            <WhatIsMedihub/>
            <TopSpecialities/>
            <Testamonial/>
            <Contributors />
        </>
    )
}

export default Home