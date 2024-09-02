import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="container">
                <nav className="flex items-center justify-center flex-wrap px-4 py-8 gap-4">
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