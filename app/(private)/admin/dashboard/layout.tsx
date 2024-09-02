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
                    <TopBar/>
                    {children}
                </div>
            </div>
        </section>
    );
}