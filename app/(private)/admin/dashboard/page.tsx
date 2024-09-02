"use client";

import React from 'react';
import Image from "next/image";

const DashboardPage: React.FC = () => {
    return (
        <div className="container max-w-full">
            <div className="flex">
                <div className="h-screen bg-amber-100 p-4">
                    <Image src="/logo.svg" alt="Logo" width={40} height={40} />
                </div>
                <div className="flex flex-col w-full">
                    <div className="p-4 border-b border-gray-200">
                        <h1>Dashboard</h1>
                    </div>
                    <div className="p-4">
                        <div>
                            content
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DashboardPage;