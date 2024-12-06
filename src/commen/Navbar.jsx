import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../Assets/Untitled.png";

const Navbar = () => {

    const navListData = [
        { id: 1, title: "About", path: "/about" },
        { id: 2, title: "Resume", path: "/resume" },
        { id: 3, title: "About", path: "/portfolio" },
        { id: 4, title: "Blog", path: "/blog" },
        { id: 5, title: "contact", path: "/contact" }
    ];

    const location = useLocation();
    const pathName = location.pathname;

    return (
        <>
            <Stack direction="row" sx={{ px: 3 }}>
                <Box
                    sx={{
                        width: "30%",
                    }}
                >
                    <Link to="/">
                        <img src={Logo} alt='logo' width={100} />
                    </Link>
                </Box>
                <Box
                    sx={{
                        width: "70%",
                        display: "flex",
                        justifyContent: "end",
                        py: 3
                    }}
                >
                    {
                        navListData.map((navbar) => (
                            <Link
                                to={navbar.path}
                                key={navbar.id}
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                <Typography
                                    sx={{
                                        px: 2,
                                        color: pathName === navbar.path ? "#009e66" : "#fff",
                                        ":hover": {
                                            color: "#009e66",
                                            transition: "1s"
                                        }
                                    }}
                                >
                                    {navbar.title}
                                </Typography>
                            </Link>
                        ))
                    }
                </Box>
            </Stack >
        </>
    )
}

export default Navbar;