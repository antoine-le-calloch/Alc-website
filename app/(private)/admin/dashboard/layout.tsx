import React from 'react';
import {LeftPanel, TopBar} from "@/components/private";

export default function DashboardLayout({children}: {
    children: React.ReactNode
}) {  
    return (
        <section>
            <div className="flex">
                <LeftPanel/>
                <div className="flex flex-col w-full">
                    <TopBar titleName={null ? "Page name":"Dashboard"}/>
                    {children}
                </div>
            </div>
        </section>
    );
}