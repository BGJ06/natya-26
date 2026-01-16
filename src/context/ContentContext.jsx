import React, { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext();

const defaultContent = {
    title: "NATYA '26",
    date: "21.02.2026",
    regFee: "200",
};

export const ContentProvider = ({ children }) => {
    const [content, setContent] = useState(defaultContent);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const savedContent = localStorage.getItem('natya_content');
        if (savedContent) {
            setContent(JSON.parse(savedContent));
        }
    }, []);

    const updateContent = (key, value) => {
        const newContent = { ...content, [key]: value };
        setContent(newContent);
        localStorage.setItem('natya_content', JSON.stringify(newContent));
    };

    const toggleAdmin = () => setIsAdmin(!isAdmin);

    return (
        <ContentContext.Provider value={{ content, updateContent, isAdmin, toggleAdmin }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => useContext(ContentContext);
