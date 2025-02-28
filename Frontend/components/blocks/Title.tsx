import React from 'react';

interface TitleProps {
    children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
    return (
        <h1 className="text-3xl font-bold text-center">
            {children}
        </h1>
    );
};