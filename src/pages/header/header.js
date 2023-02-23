import { Box, Button } from "@mui/material";
import sennaImg from "../../img/senna.jpg";
import { useEffect, useRef } from "react";
import Typed from 'typed.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faGithub,
    faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./index.scss";
import EmailIcon from '@mui/icons-material/Email';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Resume from "../../files/Matheus_Resume_CAN.pdf";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#146356",
    },
    secondary: {
      main: '#11cb5f',
    },
  }
});


library.add(
    faEnvelope,
    faLinkedinIn,
    faGithub,
);

const styleHover = {
    transition: "transform 1s",
};


function Header(){
    const strTyped = useRef(null);
    // Create reference to store the Typed instance itself
    const typed = useRef(null);
  
    useEffect(() => {
      const options = {
          strings: [
          `sports fan <span>&#x26BD;</span>`,
          'gamer <span>&#127918;</span>',
          'lifelong learner <span>&#128214;</span>',
          'beer guy <span>&#127866;</span>'
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
      };
      
      // elRef refers to the <span> rendered below
      typed.current = new Typed(strTyped.current, options);
      
      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
      }
    }, [])

    return(
        <>
            <section id="home" >
                <div className="header-img" style={{ 
                    backgroundImage: `url(${sennaImg})`
                }}>
                </div>
                <Box className="header-right" >
                    <article className="header-top">
                        <h2>
                            Hi, I'm Matheus!
                        </h2>
                        <h2>
                            Full stack developer
                        </h2>
                        <h4>
                            <div className="type-wrap">
                                    I'm also a <span ref={strTyped} />
                            </div>
                        </h4>

                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "5px",
                            gap: "2vh"
                        }}>
                            <a href="https://www.linkedin.com/in/matheus-sgolemb/" target={"_blank"} rel="noreferrer">
                                <FontAwesomeIcon className="iconHeader" icon={faLinkedinIn} size="2x" style={styleHover}/>
                            </a>
                            <a href="mailto:matheusgolemb@gmail.com" target={"_blank"} rel="noreferrer">
                                <FontAwesomeIcon className="iconHeader" icon={faEnvelope} size="2x" style={styleHover} />
                            </a>
                            <a href="https://github.com/matheusgolemb" target={"_blank"} rel="noreferrer">
                                <FontAwesomeIcon className="iconHeader" icon={faGithub} size="2x"  style={styleHover} />
                            </a>
                        </div>
                    </article>
                    <article className="header-bottom">
                        <ThemeProvider theme={theme}>
                            <Button color="primary" variant="outlined" component={"a"} href={"mailto:matheusgolemb@gmail.com"} target="_blank" startIcon={<EmailIcon />}>matheusgolemb</Button>
                            <Button color="primary" variant="outlined" component={"a"} href={Resume} target="_blank" download startIcon={<FileDownloadIcon />}>My resume</Button>
                        </ThemeProvider>

                    </article>
                </Box>
            </section>
        </>
    )
}
export default Header;