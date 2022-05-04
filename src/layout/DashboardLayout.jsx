import React from 'react';
import {Outlet} from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div>
            <header>
                header
            </header>
            <aside>
                sidebar
            </aside>
            <main>
                <Outlet/>
            </main>
            <footer>
                footer
            </footer>
        </div>
    );
};

export default DashboardLayout;
