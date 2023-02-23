import "./index.scss";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
// import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';

function NavbarNew(){

    return(
        <>
            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li>
                        <a href="#home" className="nav-link scrollto active">
                            <HomeIcon /> 
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="nav-link scrollto">
                            <PersonIcon /> 
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="nav-link scrollto">
                            <CodeIcon /> 
                            <span>Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-link scrollto">
                            <EmailIcon /> 
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default NavbarNew;