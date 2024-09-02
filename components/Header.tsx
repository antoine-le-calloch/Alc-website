import React from 'react';
import {ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Image from "next/image";


const Header = () => {
    return (
        <div className="border-b border-black">
            <div className="container mx-auto">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center">
                        <a href="/">
                            <Image src="/logo.png" alt="Logo" width={60} height={60}/>
                        </a>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <a href="/about" className="text-2xl font-bold uppercase">
                            About
                        </a>
                        <a href="/contact" className="text-2xl font-bold uppercase">
                            Contact
                        </a>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <a href="/account">
                            <UserCircleIcon className="size-6"/>
                        </a>
                        <a href="/cart">
                            <ShoppingCartIcon className="size-6"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;