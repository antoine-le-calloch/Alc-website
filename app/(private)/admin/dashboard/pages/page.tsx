"use client";

import React, {useEffect, useState} from 'react';
import Link from "next/link";

type Page = {
    title: string;
    text: string;
};

const PagesPage = () => {
    const [pages, setPages] = useState([])
    const [message, setMessage] = useState('Loading...')

    useEffect(() => {
        async function fetchPosts() {
            let res = await fetch('/api/pages')
            let data = await res.json()
            setPages(data)
            if(data.length == 0)
                setMessage('No pages created yet !')
        }
        fetchPosts()
    }, [])

    return (
        <div>
            <div className="flex justify-between items-center py-2">
                <h2>
                    List
                </h2>
                <Link href="/admin/dashboard/pages/new" 
                      className="rounded bg-blue-300 hover:bg-blue-400 py-1 px-2">
                    New
                </Link>
            </div>
            <div className="flex justify-center items-center border-t border-gray-500">
                { pages.length === 0 ? (
                    <div className="my-4">{message}</div>
                ) : (
                    pages.map((post: Page, index: number) => (
                        <div key={index} className="border-b border-gray-200 p-4">
                            <div className="font-bold">{post.title}</div>
                            <div>{post.text}</div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
};

export default PagesPage;