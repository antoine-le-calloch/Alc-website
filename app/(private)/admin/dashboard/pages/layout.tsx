import React from 'react';
import {TopBar} from "@components/private";

export default function DashboardLayout({children}: {
    children: React.ReactNode
}) {  
    return (
        <section>
            <TopBar titleName={"Pages management"}/>
            <div className="container p-4">
                {children}
            </div>
        </section>
    );
}