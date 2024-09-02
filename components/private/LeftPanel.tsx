import React from 'react';
import Image from "next/image";
import {Cog6ToothIcon} from "@heroicons/react/24/outline";

const LeftPanel = () => {
    return (
        <div className="flex flex-col justify-between items-center h-screen bg-amber-100 p-4 shadow-xl">
            <Image src="/logo.svg" alt="Logo" width={40} height={40}/>
            <div className="flex flex-col gap-4 text-center text-xl">
                <div>
                    Pages
                </div>
                <div>
                    Components
                </div>
            </div>
            <div>
                <a href="/admin/settings">
                    <Cog6ToothIcon className="size-6"/>
                </a>
            </div>
        </div>
    );
};

export default LeftPanel;