import "./index.scss";
import { Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
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
function ProjectCard({projectInfo}){
    const technologies = projectInfo.technologies;
    const txts = projectInfo.paragraphs;
    const pLink = projectInfo.pLink;
    return(
        <>
            <section className="cont-post">
                <article className="cont-img">
                    <img src={projectInfo.img} alt={projectInfo.title}/>
                </article>
                <article className="post-info">
                    <h4 className="post-title">
                        {projectInfo.title}
                    </h4>
                    <div className="post-date">
                        <span>Technologies used:
                            {technologies.map((tech, idx)=>idx+1 === technologies.length ? tech : " "+tech + " | "
                            )}
                        </span>
                    </div>
                    <div className="post-text">
                        {txts.map((txt, idx)=><p key={idx}>{txt}</p>)}
                    </div>
                    <div className="post-footer">
                    <ThemeProvider theme={theme}>
                        <Button variant="outlined" color="primary" component={"a"} href={pLink} target="_blank" startIcon={<GitHubIcon />}>See on GitHub</Button>
                    </ThemeProvider>
                    </div>
                </article>
            </section>
        </>
    )
}
export default ProjectCard;