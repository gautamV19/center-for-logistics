import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/Images/logo.png";


const pages = ["Home", "About", "Events", "People"];

function Header() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar >
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton
                            onClick={handleOpenUserMenu}
                            sx={{ p: 0 }}
                            onClickCapture={() => {
                                navigate("/");
                            }}
                        >
                            <img src={logo} alt="logo" width="150px" height="80px" />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => {
                                    (page === "Home") ? navigate("/") : navigate(`/${page.toLowerCase()}`);
                                }}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Button variant="contained" onClick={() => {
                        navigate('/join');
                    }}>
                        Join
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
