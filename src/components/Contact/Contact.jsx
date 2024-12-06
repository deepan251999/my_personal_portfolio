import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <>
            <Box
                sx={{
                    background: "black",
                    py: 6
                }}
            >
                <Container fixed >
                    <Box
                        sx={{
                            color: "#fff",
                            textAlign: "center"
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#9f9f9f',
                                fontSize: 14,
                                py: 1
                            }}
                        >
                            Feel free to contact me anytimes
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: 42,
                                position: "relative",
                                "::before": {
                                    content: '""',
                                    position: "absolute",
                                    height: "4px",
                                    width: "0px",
                                    backgroundColor: "#009e66",
                                    top: "77px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    transition: "1s",
                                },
                                ":hover::before": {
                                    width: "80px",
                                },
                            }}
                        >
                            Get in Touch
                        </Typography>
                    </Box>
                    <ContactForm />
                </Container>
            </Box>
        </>
    )
}

export default Contact;