import React from 'react';

const Footer = () => {
    return (
        <div className="bg-black text-white">
            <div className="container">
                <div className="flex items-center justify-center flex-wrap px-4 py-8 gap-4">
                    <a href="/about" className="text-l font-bold uppercase">
                        About
                    </a>
                    |
                    <a href="/contact" className="text-l font-bold uppercase">
                        Contact
                    </a>
                    |
                    <a href="/privacy_policy" className="text-l font-bold uppercase">
                        Privacy Policy
                    </a>
                    |
                    <a href="/refund_policy" className="text-l font-bold uppercase">
                        Refund Policy
                    </a>
                    |
                    <a href="/shipping_policy" className="text-l font-bold uppercase">
                        Shipping Policy
                    </a>
                    |
                    <a href="/terms_of_sale" className="text-l font-bold uppercase">
                        Terms of Sale
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;