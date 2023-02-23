import Header from "./pages/header/header";
import About from "./pages/about/about";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import NavbarNew from "./components/Navbar/NavbarNew";
import ContactPage from "./pages/contactPage/ContactPage";

function Main(){
    return(
            <>
                <main>
                    <NavbarNew />
                    <Header /> 
                    <About />
                    <ProjectsPage />
                    <ContactPage />
                </main>
            </>
    )
}
export default Main;