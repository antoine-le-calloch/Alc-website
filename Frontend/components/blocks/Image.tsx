import React from 'react';
import Img from "next/image";

interface ImageProps {
    imgSrc: string;
}

const Image: React.FC<ImageProps> = ({ imgSrc }) => {
    return (
        <Img src={imgSrc} alt="Image" width={500} height={500} className="mx-auto" />
    );
};