import React from 'react';

interface SubtitleProps {
    children: React.ReactNode;
}

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
    return (
        <h2 className="text-2xl font-bold">
            {children}
        </h2>
    );
};