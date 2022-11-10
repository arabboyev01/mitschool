import {Box} from "@mui/system";
import useStyles from "./homepage.style";
import Navbar from "../../reusiable/Navbar/Navbar";

export default function HomePage(){

    const classes= useStyles();
    return(
        <Box className={classes.homeWrapper}>
            <Box>
                <Navbar />
            </Box>
        </Box>
    )
}
