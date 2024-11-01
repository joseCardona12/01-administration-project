"use client";
import { Header, Footer } from "@/components/layouts";
import { Section } from "@/components/organisms";
import "./vacantStyles.scss";
import { Content } from "@/models";
import { useState } from "react";
import { usePaginationState } from "@/global-state/pagination";

interface IVacantProps{
    vacants: Content[],
}
export default function Vacant({vacants}:IVacantProps):React.ReactNode{
    const pagination = usePaginationState((state)=>state);
    console.log(pagination);
    return(
        <>
        <Header
        title="Administration panel"
        />
        <main className="main">
            <Section
            titleSection="Vacants"
            textButton="Add Vacant"
            data={vacants}
            />
        </main>
        <Footer
        />
        </>
    )
}