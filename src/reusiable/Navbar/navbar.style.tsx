import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({
    navbarWrapper: {
        width: "100%",
        background: "rgb(38, 187, 78)",
    },
    navbarContentWrapper: {
        maxWidth: "1320px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 0",
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
        '@media(max-width: 560px)': {
            display: "none",
        },
    },
    collapsedMobile: {
        '@media(max-width: 560px)': {
            display: "block",
        },
    },
    navItem: {
        marginRight: "50px",
        '&:last-of-type':{
            marginRight: "0px",
        },
    },
    hamburger: {
        display: "none",
        '@media(max-width: 560px)': {
            display: "block",
        },
    },
    hamburgerButton: {
        background: "transparent",
        border: "none",
        color: "#fff",
    }
}));
