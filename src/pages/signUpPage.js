import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { useTheme } from "@mui/material/styles";

const SignUpPage = () => {
    const context = useContext(AuthContext);
    const theme = useTheme();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [registered, setRegistered] = useState(false);

    const register = async () => {
        let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validPassword = passwordRegEx.test(password);

        if (!validPassword) {
            setErrorMessage("Password must be at least 8 characters long, include a number and a special character.");
            return;
        }

        if (password !== passwordAgain) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        setIsLoading(true);
        try {
            await context.register(userName, password);
            setRegistered(true);
        } catch (error) {
            setErrorMessage("An error occurred. Please try again later.");
        }
        setIsLoading(false);
    };

    if (registered === true) {
        return <Navigate to="/login" />;
    }

    return (
        <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: theme.spacing(4),
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: theme.palette.background.paper,
                    width: '100%',
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Sign Up
                </Typography>
                <Typography variant="body1" gutterBottom>
                    You must register a username and password to log in
                </Typography>

                {errorMessage && (
                    <Typography variant="body2" color="error" sx={{ marginTop: theme.spacing(2) }}>
                        {errorMessage}
                    </Typography>
                )}

                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <TextField
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="password"
                    value={passwordAgain}
                    onChange={e => setPasswordAgain(e.target.value)}
                />

                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    sx={{ marginTop: theme.spacing(2) }} 
                    onClick={register}
                    disabled={!userName || !password || !passwordAgain || isLoading}
                >
                    {isLoading ? 'Registering...' : 'Register'}
                </Button>
            </Box>
        </Container>
    );
};

export default SignUpPage;
