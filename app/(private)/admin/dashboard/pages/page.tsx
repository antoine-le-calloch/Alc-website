"use client";

import React, {useEffect, useState} from 'react';
import {PlusIcon} from "@heroicons/react/24/solid";
import {collection, addDoc, getDocs} from 'firebase/firestore';
import { db } from '@lib/firebase';
import {TopBar} from "@components/private";

const PagesPage: React.FC = () => {
    const [pages, setPages] = useState<any[]>([]);

    const fetchPages = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'pages'));
            const pagesList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setPages(pagesList);
        } catch (e) {
            alert('Error fetching pages: ' + e);
        }
    };

    useEffect(() => {
        fetchPages();
    }, []);
    
    const handleSubmit = async () => {
        try {
            await addDoc(collection(db, 'pages'), {
                title: "title",
                text: "text",
            });
        } catch (e) {
            alert('Error creating page: ' + e);
        }
    };
    
    return (
        <div>
            <TopBar titleName={"Pages management"}/>
            <div className="container p-4">
                <div>
                    Create a new page
                </div>
                <div className="m-5">
                    <button type="submit" onClick={handleSubmit}>
                        <PlusIcon className="size-8 rounded bg-blue-300 hover:bg-blue-400"/>
                    </button>
                </div>
                {pages.map((page) => (
                    <div key={page.id} className="flex gap-8 border-b-2 border-gray-200 p-2">
                        <div>{page.title}</div>
                        <div>{page.text}</div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default PagesPage;