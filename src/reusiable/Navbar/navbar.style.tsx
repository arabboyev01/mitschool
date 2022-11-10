import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({
    navbarWrapper: {
        width: "100%",
        background: "rgb(38, 187, 78)",
    },
    navbarContentWrapper: {
        position: "relative",
        maxWidth: "1320px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 0",
        '@media(max-width: 720px)': {
            padding: "20px",
        }
    },
    Logo: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    logoImages: {
        objectFit: "contain",
    },
    logoName: {
        marginLeft: "10px",
        color: "white",
        fontSize: "24px",
        lineHeight: "26px",
        fontWeight: 400,
    },
    collapsedNav: {
        display:"flex",
        flexDirection: "row",
        alignItems: "center",
        '@media(max-width: 720px)': {
            display: "none",
        },
    },
    collapsedMobile: {
        position: "absolute",
        top: "100px",
        right: 0,
        width: "100%",
        background: "rgb(38, 187, 78)",
        '@media(max-width: 720px)': {
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            paddingLeft: "50px",
            paddingBottom: "20px",
        },
    },
    navItem: {
        marginRight: "50px",
        color: "#fff",
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "24px",
        '&:last-of-type':{
            marginRight: "0px",
        },
        '@media(max-width: 720px)': {
            fontSize: "18px",
            marginRight: "0px",
            paddingBottom: "20px",
        },
    },
    hamburger: {
        display: "none",
        '@media(max-width: 720px)': {
            display: "block",
        },
    },
    hamburgerButton: {
        background: "transparent",
        border: "none",
        color: "#fff",
    }
}));
