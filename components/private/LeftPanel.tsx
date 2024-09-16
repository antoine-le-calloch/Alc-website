import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {Cog6ToothIcon} from "@heroicons/react/24/outline";

const LeftPanel = () => {
    return (
        <div className="flex flex-col justify-between items-center h-screen p-4 panel-color shadow-xl">
            <Link href="/admin/dashboard">
                <Image src="/logo/logo.svg" alt="Logo" width={40} height={40}/>
            </Link>
            <div className="flex flex-col gap-4 text-center text-xl mx-2">
                <Link href="/admin/dashboard/pages">
                    PAGES
                </Link>
            </div>
            <div>
                <Link href="/">
                    <Cog6ToothIcon className="size-6"/>
                </Link>
            </div>
        </div>
    );
};

export default LeftPanel;