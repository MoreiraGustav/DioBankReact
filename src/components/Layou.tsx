import Footer from "./Footer";
import Header from "./Header/Header";

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout ({children}: LayoutProps){
    return (
        <>
        <Header />
        {children}
        <Footer />
        </>

    )
}