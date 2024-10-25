import Header from "./header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


export const Layout = () => {
    return (
        <>
        <Header />
        <main>
            <Outlet />
      </main>
        <Footer />
        </>
    )
}
