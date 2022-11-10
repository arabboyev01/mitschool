import {useState} from  "react";
import {Box} from "@mui/system";
import useStyles from "./navbar.style"
import Image from "next/image";
import Logo from "../../assets/home-page-images/download (1).png"
import {Typography} from "@mui/material";
import {data} from "./data";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar(){
    const classes = useStyles();
    const [openMenu, setOpenMenu] = useState(false);
    const [hamburgerIcon, setHamburgerIcon] = useState(<MenuIcon />);

    const handleOpenMenu = function(){
        setOpenMenu(!openMenu ? true: false);
        // setHamburgerIcon(!openMenu ? <MenuIcon/> : <CloseIcon/> )
        openMenu ? setHamburgerIcon(<MenuIcon/>) : setHamburgerIcon(<CloseIcon/>)
    }
    return(
        <Box className={classes.navbarWrapper}>
            <Box className={classes.navbarContentWrapper}>
                <Box className={classes.Logo}>
                    <Image src={Logo.src} alt="logo" width={150} height={60} className={classes.logoImages}/>
                </Box>
                <Box className={!openMenu ? classes.collapsedNav: classes.collapsedMobile}>
                    {data.map(item =>
                        <Typography className={classes.navItem} key={item.id}>{item.name}</Typography>
                    )}
                </Box>
                <Box className={classes.hamburger} onClick={handleOpenMenu}>
                    <button className={classes.hamburgerButton}>{hamburgerIcon}</button>
                </Box>
            </Box>
        </Box>
    )
}
