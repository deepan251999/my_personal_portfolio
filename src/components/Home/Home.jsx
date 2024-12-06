import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../commen/Navbar.jsx";
import { Box, Stack, Typography } from '@mui/material';
import BackgroundImage from "../../Assets/Pic/IMG-20241117-WA0096.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Home = () => {

    const texts = ["Designer", "Developer"];
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    const iconListData = [
        { id: 1, iconData: <InstagramIcon />, path: "/https://www.instagram.com/deepan251999/", targetPath: "_blank" },
        { id: 2, iconData: <GitHubIcon />, path: "https://github.com/deepan251999", targetPath: "_blank" },
        { id: 3, iconData: <TwitterIcon />, path: "/", targetPath: "_self" },
        { id: 4, iconData: <FacebookIcon />, path: "/", targetPath: "_self" }
    ];

    useEffect(() => {
        const handleTyping = () => {
            const fullText = texts[textIndex];
            if (isDeleting) {
                setCurrentText((prev) => prev.slice(0, -1));
                if (currentText === "") {
                    setIsDeleting(false);
                    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                }
            } else {
                setCurrentText(fullText.slice(0, currentText.length + 1));
                if (currentText === fullText) {
                    setIsDeleting(true);
                }
            }
        };

        const timeout = setTimeout(handleTyping, isDeleting ? 100 : 150);
        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, textIndex, texts]);

    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${BackgroundImage})`,
                    width: "100%",
                    height: "100vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <Box
                    sx={{
                        background: "rgb(0 0 0 / 78%)",
                        width: "100%",
                        height: "100%"
                    }}
                >
                    <Navbar />
                    <Box
                        sx={{
                            textAlign: "center",
                            color: "#fff",
                            mt: 20,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 70,
                                fontWeight: 700,
                            }}
                        >
                            Deepan K
                        </Typography>
                        <Stack direction="row" justifyContent="center">
                            <Typography
                                sx={{
                                    fontSize: 32,
                                    fontWeight: 400,
                                    pr: 1,
                                    transition: "opacity 0.5s ease-in-out",
                                }}
                            >
                                I’m a
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#009e66",
                                    fontSize: 32,
                                    fontWeight: 400,
                                }}
                            >
                                {currentText}
                            </Typography>
                        </Stack>
                    </Box>
                    <Box
                        sx={{
                            position: "fixed",
                            bottom: 15,
                            right: "25px"
                        }}
                    >
                        {
                            iconListData.map((iconData) => (
                                <Link
                                    key={iconData.id}
                                    to={iconData.path}
                                    target={iconData.targetPath}
                                >
                                    <Typography
                                        sx={{
                                            color: "#fff",
                                            my: 2,
                                            cursor: "pointer",
                                            ":hover": {
                                                color: "#009e66"
                                            }
                                        }}
                                    >
                                        {iconData.iconData}
                                    </Typography>
                                </Link>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Home;