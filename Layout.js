import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout(){



    return (
        <container className="main-container">
            <header>
                <h1>Welcome to the site!</h1>
            </header>
            <nav>
                <Link to="home">Home</Link><br />
                <Link to="about">About</Link><br />
                <Link to="blog">Blog</Link><br />
            </nav>
            <main>
                <Outlet />
            </main>
        </container>
    );
}
export default Layout;