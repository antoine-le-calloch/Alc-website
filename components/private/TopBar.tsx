import React from 'react';

const TopBar = ({titleName}) => {
    return (
        <div className="px-4 py-6 border-b border-gray-200 shadow-md">
            <div className="font-bold">
                {titleName}
            </div>
        </div>
    );
};

export default TopBar;