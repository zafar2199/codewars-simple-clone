import { FC, ReactNode } from "react";

import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <main className="page">{children}</main>

            <Footer />
        </>
    );
};

export default Layout;
