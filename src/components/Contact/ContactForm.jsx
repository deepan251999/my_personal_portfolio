import { Box, Stack, Typography, TextField, Button } from '@mui/material';
import React from 'react';

const ContactForm = () => {
    return (
        <>
            <Stack direction="row" spacing={6} mt={14}>
                <Box
                    sx={{
                        width: "50%",
                        color: "#fff",
                    }}
                >
                    <Typography sx={{ fontWeight: 500, fontSize: 28 }}>Message Me</Typography>
                    <Stack direction={'row'} spacing={2}>
                        <TextField id="filled-basic" label="Filled" variant="filled" color="success" sx={{ width: "50%",color:"#fff" }} />
                        <TextField id="filled-basic" label="Filled" variant="filled" color="success" sx={{ width: "50%" }} />
                    </Stack>
                    <TextField id="filled-basic" label="Filled" variant="filled" color="success" sx={{ width: "100%",my:3 }} />
                    <Button variant="contained" sx={{ borderRadius: 50, px: 3, py: 1, mt: 4 }}>Send Message</Button>
                </Box>
                <Box
                    sx={{
                        width: "35%",
                        color: "#fff",
                    }}
                >
                    <Typography sx={{ fontWeight: 500, fontSize: 28 }}>Contact Info</Typography>
                    <Typography sx={{ fontSize: 15, color: "#9f9f9f", lineHeight: 2 }}>Always available for freelance work if the right project comes along, Feel free to contact me!</Typography>
                </Box>
            </Stack>
        </>
    )
}

export default ContactForm;