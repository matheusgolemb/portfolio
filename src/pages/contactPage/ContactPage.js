import { Box } from "@mui/material";
import { faEnvelope, faLocationDot, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import imgComment2 from "../../img/commentsTe.png";
import Resume from "../../files/Matheus_Resume_CAN.pdf";


function ContactPage(){
    
    return(
        <>
            <Box id="contact" component={"section"}>
                <article className="cont-contact">
                    <h3>
                        Contact Me!
                    </h3>
                    <ul className="list">
                        <li>
                            <a href="#contact">
                                <div>
                                    <FontAwesomeIcon icon={faLocationDot} className="contactIcon" />
                                </div>
                                <span>
                                    Vancouver, BC - Canada
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:matheusgolemb@gmail.com" target={"_blank"} rel="noreferrer">
                                <div>
                                    <FontAwesomeIcon icon={faEnvelope} className="contactIcon" />
                                </div>
                                <span>
                                    matheusgolemb@gmail.com
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/matheus-sgolemb/" target={"_blank"} rel="noreferrer">
                                <div>
                                    <FontAwesomeIcon icon={faLinkedinIn} className="contactIcon" />
                                </div>
                                <span>
                                    LinkedIn
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/matheusgolemb" target={"_blank"} rel="noreferrer">
                                <div>
                                    <FontAwesomeIcon icon={faGithub} className="contactIcon" />
                                </div>
                                <span>
                                    GitHub
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href={Resume} download target={"_blank"} rel="noreferrer">
                                <div>
                                    <FontAwesomeIcon icon={faFileArrowDown} className="contactIcon" />
                                </div>
                                <span>
                                    My resume
                                </span>
                            </a>
                        </li>
                    </ul>
                        <img src={imgComment2} className="commentImg" alt="comment"/>
                </article>
            </Box>        
        </>
    )
}
export default ContactPage;