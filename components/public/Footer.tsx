import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="container">
                <nav className="flex items-center justify-center flex-wrap px-4 py-8 gap-4">
                    <Link href="/">
                        <Image src="/logo/logo_white.png" alt="Logo" width={40} height={40}/>
                    </Link>
                    |
                    <a href="/about" className="font-bold uppercase">
                        About
                    </a>
                    |
                    <a href="/contact" className="font-bold uppercase">
                        Contact
                    </a>
                    |
                    <a href="/privacy_policy" className="font-bold uppercase">
                        Privacy Policy
                    </a>
                    |
                    <a href="/refund_policy" className="font-bold uppercase">
                        Refund Policy
                    </a>
                    |
                    <a href="/shipping_policy" className="font-bold uppercase">
                        Shipping Policy
                    </a>
                    |
                    <a href="/terms_of_sale" className="font-bold uppercase">
                        Terms of Sale
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;