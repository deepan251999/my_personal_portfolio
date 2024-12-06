import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "../Pages/HomePage.jsx";
import AboutPage from "../Pages/AboutPage.jsx";
import ResumePage from '../Pages/ResumePage';
import PortfolioPage from '../Pages/PortfolioPage';
import BlogPage from '../Pages/BlogPage';
import ContactPage from '../Pages/ContactPage';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/resume" element={<ResumePage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;