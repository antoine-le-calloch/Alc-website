import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
    return (
        <header className="border-b border-gray-200">
            <div className="container">
                <nav className="flex items-center p-4">
                    <div className="flex-1">
                        <Link href="/">
                            <Image src="logo/logo.svg" alt="Logo" width={60} height={60}/>
                        </Link>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <Link href="/" className="text-2xl font-bold uppercase">
                            About
                        </Link>
                        <Link href="/" className="text-2xl font-bold uppercase">
                            Contact
                        </Link>
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