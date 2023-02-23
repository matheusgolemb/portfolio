import { Box } from "@mui/material"
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./index.scss";
import wePost from "../../img/WePost_profile.jpg";
import vigenere1 from "../../img/dec1.jpg";
import regForm1 from "../../img/Registration_Form_List.png";

function ProjectsPage(){
    const projectInfo1 = {
        title: "VIGENERE CIPHER",
        technologies: ["PHP", "Bootstrap"],
        paragraphs: [
            "The goal of this project was to learn about the vigenere cipher.",
            "Vigenere Cipher is a method of encrypting alphabetic text. It uses a simple form of polyalphabetic substitution. A polyalphabetic cipher is any cipher based on substitution, using multiple substitution alphabets. The encryption of the original text is done using the Vigenère square or Vigenère table.",
            "So in this project the user can send a message and choose the key (password) to encrypt the message. And to decrypt it, user must inform the correct key and then the message will be decrypted and displayed."
        ],
        img: vigenere1,
        pLink: "https://github.com/matheusgolemb/vigenere_cipher"
    };
    const projectInfo2 = {
        title: "WePost",
        technologies: ["PHP", "Bootstrap", "MySQL"],
        paragraphs: [
            "This team project goal was to create a social media website.",
            "So in this website it is possible to see all the posts, create new posts, see comments, register and login. And in the admin role, we can see metrics about the website.",
            "My role in this team project was to show all posts of the database, create a new post and I created the profile page which user can edit informations too."
        ],
        img: wePost,
        pLink: "https://github.com/matheusgolemb/wepost-api"

    };
    const projectInfo3 = {
        title: "Company employees",
        technologies: ["PHP", "Bootstrap"],
        paragraphs: [
            "This project was done when I started learning PHP. The main goal is to create a registration form and after that, display all the employees calculating the average salary and showing the employees with salary above average."
        ],
        img: regForm1,
        pLink: "https://github.com/matheusgolemb/RegisterForm_php",

    };

    return(
        <>
            <Box component={"section"} id="projects">
                <h3>Projects</h3>
                <Box component={"section"} className="cont-projects">
                    <ProjectCard projectInfo={projectInfo1} />
                    <ProjectCard projectInfo={projectInfo2} />
                    <ProjectCard projectInfo={projectInfo3} />
                </Box>
            </Box>
        </>
    )
}
export default ProjectsPage