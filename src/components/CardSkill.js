import { Paper } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function CardSkill({skillIcon, skillName, iconColor}){
    const styleHover = {
        transition: "transform .4s"
    };
    return(
        <>
            <Paper className="card" elevation={3} sx={styleHover}>
                <FontAwesomeIcon className="icon" icon={skillIcon} color={iconColor} size="3x" />
                <p style={{color: iconColor}} >
                    {skillName}
                </p>
            </Paper>
        </>
    )
}
export default CardSkill;