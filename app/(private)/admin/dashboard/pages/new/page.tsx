"use client";

import React from 'react';

type Page = {
    title: string;
    text: string;
};

const PagesPage = () => {
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('/api/pages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            alert("New page successfully created !");
        }
    }
    
    return (
        <div>
            <div className="flex justify-between items-center py-2">
                <h2>
                    New page creation
                </h2>
            </div>
            <form>
                <div className="flex flex-col">
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div className="flex flex-col">
                    <label>Text</label>
                    <textarea />
                </div>
                <button type="submit" onClick={handleSubmit}>
                    Create
                </button>
            </form>
        </div>
    )
};

export default PagesPage;