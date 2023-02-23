import { Box, Typography, Paper } from "@mui/material";
import "./index.scss"
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faGitAlt,
    faGithub,
    faNodeJs,
    faReact,
    faCss3,
    faAngular,
    faSass,
    faPhp,
    faMicrosoft,
    faBootstrap,
    faSquareJs,
    faHtml5,
    faLinkedinIn,
    faJsSquare,
    
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {ReactComponent as VBA} from "../../img/VBA_Icon.svg";
import CardSkill from "../../components/CardSkill";
import MatheusImg from "../../img/matheus_profile.jpeg";

library.add(
    faEnvelope,
    faLinkedinIn,
    faGitAlt,
    faGithub,
    faNodeJs,
    faReact,
    faCss3,
    faAngular,
    faSass,
    faPhp,
    faMicrosoft,
    faBootstrap,
    faSquareJs,
    faHtml5,
    faDatabase
);

const styleHover = {
    transition: "transform .4s",
};


function About(){
    return(
        <>
            <Box component={"section"} id="about" >
                <Box >
                    <h3>
                        About
                    </h3>
                    <Box component={"section"} sx={{
                        display: "flex"
                    }}>
                        <Box component={"article"} className="about-left">
                            <img className="matheus-img" src={MatheusImg} alt="Matheus"/>
                        </Box>
                        <Box component={"article"} className="about-right">
                            <aside>
                                <Typography variant="body1" fontSize={"18px"} component={"p"}>
                                    My name is Matheus Santana Golembiewski, I'm from Brazil. Nice to meet you!
                                </Typography>
                                <Typography variant="body1" fontSize={"18px"} component={"p"}>
                                    I started my professional career as an accountant and worked in this area for 4 years. I used to work a lot with Excel and do repetitive tasks... But, after I learned about VBA (Visual Basic for Applications) I realized the power of the programming languages.
                                </Typography>
                                <Typography variant="body1" fontSize={"18px"} component={"p"}>
                                    I discovered that by writing codes, I could do basically everything by scripts! Faster and without human mistakes! After that, I learned about VBA and automated a lot of tasks that I had in my work. But I also discovered that other technologies were much more powerful than VBA. So I decided to come to Canada to do a Web Development course, to learn new technologies! And here I am! 
                                </Typography>
                                <Typography variant="body1" fontSize={"18px"} component={"p"}>
                                    I am an avid learner and currently, I am improving my skills in PHP, Javascript (More focused on ReactJS and NodeJS), and databases!
                                </Typography>
                            </aside>
                            <aside className="skills-container">
                                <h4>My Skills</h4>
                                <Box className="card-wrapper">
                                    <CardSkill id="js-Logo" skillIcon={faJsSquare} skillName={"JavaScript"} iconColor={"#F0DB4F"}/>
                                    <CardSkill id="react-Logo" skillIcon={faReact} skillName={"React"} iconColor={"#61DBFB"} />
                                    <CardSkill id="node-Logo" skillIcon={faNodeJs} skillName={"NodeJs"} iconColor={"#3c873a"} />
                                    <CardSkill id="angular-Logo" skillIcon={faAngular} skillName={"AngularJs"} iconColor={"#a6120d"} />
                                    <CardSkill id="php-Logo" skillIcon={faPhp} skillName={"PHP"} iconColor={"#8993be"} />
                                    <CardSkill id="mysql-Logo" skillIcon={faDatabase} skillName={"MySQL"} iconColor={"#F29111"} />
                                    <CardSkill id="git-Logo" skillIcon={faGitAlt} skillName={"Git"} iconColor={"#F1502F"} />
                                    <CardSkill id="github-Logo" skillIcon={faGithub} skillName={"GitHub"} iconColor={"black"} />
                                    <CardSkill id="html-Logo" skillIcon={faHtml5} skillName={"HTML"} iconColor={"#E44D26"} />
                                    <CardSkill id="css-Logo" skillIcon={faCss3} skillName={"CSS"} iconColor={"#2965f1"} />
                                    <CardSkill id="sass-Logo" skillIcon={faSass} skillName={"SCSS"} iconColor={"#c69"} />
                                    <CardSkill id="bs-Logo" skillIcon={faBootstrap} skillName={"Bootstrap"} iconColor={"#563d7c"} />
                                    <CardSkill id="ms-Logo" skillIcon={faMicrosoft} skillName={"MS Office"} iconColor={"black"} />

                                    <Paper className="card" elevation={3} sx={styleHover}>
                                        <VBA id="VBA-Logo" />
                                        <p>
                                            VBA
                                        </p>
                                    </Paper>
                                </Box>
                            </aside>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default About;