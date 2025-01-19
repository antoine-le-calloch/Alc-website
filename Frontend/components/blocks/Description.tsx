import React from 'react';

interface DescriptionProps {
    children: React.ReactNode;
}

const Description: React.FC<DescriptionProps> = ({ children }) => {
    return (
        <div className="text-center py-8">
            {children}
        </div>
    );
};