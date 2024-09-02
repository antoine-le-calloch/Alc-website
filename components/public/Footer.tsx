import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="container">
                <nav className="flex align-top justify-center flex-wrap px-4 py-8 gap-4">
                    <div className="flex flex-col items-center mr-12 gap-y-3">
                        <Link href="/">
                            <Image src="/logo/logo_white.png" alt="Logo" width={40} height={40}/>
                        </Link>
                        <div className="italic text-sm text-center">
                            Antoine Le Calloch {new Date().getFullYear()}<br/>
                            All rights reserved &copy;
                        </div>
                    </div>
                    <div className="flex flex-col justify-self-start items-center mx-8">
                        <div className="font-bold mb-4">
                            Information
                        </div>
                        <a href="/about" className="uppercase">
                            About
                        </a>
                        <a href="/contact" className="uppercase">
                            Contact
                        </a>
                    </div>
                    |
                    <div className="flex flex-col justify-self-start items-center mx-8">
                        <div className="font-bold mb-4">
                            Policies
                        </div>
                        <a href="/privacy_policy" className="uppercase">
                            Privacy Policy
                        </a>
                        <a href="/refund_policy" className="uppercase">
                            Refund Policy
                        </a>
                        <a href="/shipping_policy" className="uppercase">
                            Shipping Policy
                        </a>
                    </div>
                    |
                    <a href="/terms_of_sale" className="font-bold mx-8">
                        Terms of Sale
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;