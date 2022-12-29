import React, { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface IProps {
    children: ReactNode;
}

const Layout = ({ children }: IProps) => {
    return (
        <>
            <div className="content">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    );
};

export default Layout;
