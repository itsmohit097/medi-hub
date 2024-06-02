import React from 'react'
import { Contributors, Hero, WhatIsMedihub, WhyUs, Testamonial } from "../import-export/ImportExport";
import Stats from '../components/Stats';

function Home() {
    return (
        <>
            <Hero />
            <WhyUs />
            <Stats></Stats>
            <WhatIsMedihub/>
            <Testamonial/>
            <Contributors />
        </>
    )
}

export default Home