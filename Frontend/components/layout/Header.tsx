"use client";

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import {ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
    const [pages, setPages] = useState([])

    useEffect(() => {
        async function fetchPages() {
            let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pages`)
            let data = await res.json()
            setPages(data)
        }
        fetchPages()
    }, [])
    
    return (
        <header className="border-b border-gray-200">
            <div className="container">
                <nav className="flex items-center p-4">
                    <div className="flex-1">
                        <Link href="/">
                            <Image src="logo/logo.svg" alt="Logo" width={60} height={60}/>
                        </Link>
                    </div>
                    <div className="flex items-center gap-x-8">
                        {
                            pages.map((page: any, index: number) => (
                                <Link key={index} href={page.title} className="text-2xl font-bold uppercase">
                                    {page.title}
                                </Link>
                            ))
                        }
                    </div>
                    <div className="flex-1 flex items-center justify-end gap-x-8">
                        <Link href="/">
                            <UserCircleIcon className="size-8"/>
                        </Link>
                        <Link href="/">
                            <ShoppingCartIcon className="size-8"/>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;