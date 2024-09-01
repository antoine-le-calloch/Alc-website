import React from 'react';
import {ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Image from "next/image";


const Header = () => {
    return (
        <div className="border-b border-black">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                    <a href="/">
                        <Image src="/logo.png" alt="Logo" width={60} height={60}/>
                    </a>
                </div>
                <div className="flex items-center">
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="flex items-center">
                    <a href="/account">
                        <UserCircleIcon className="size-6"/>
                    </a>
                    <a href="/cart">
                        <ShoppingCartIcon className="size-6"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;