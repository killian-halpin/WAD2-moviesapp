import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import { Box, Button, TextField, Typography, Grid, Container } from '@mui/material';
import { useTheme } from "@mui/material/styles";

const LoginPage = () => {
    const context = useContext(AuthContext);
    const theme = useTheme();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        context.authenticate(userName, password);
    };

    let location = useLocation();
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
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
                    Login
                </Typography>
                <Typography variant="body1" gutterBottom>
                    You must log in to view the protected pages
                </Typography>

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

                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    sx={{ marginTop: theme.spacing(2) }} 
                    onClick={login}
                >
                    Log In
                </Button>

                <Typography variant="body2" sx={{ marginTop: theme.spacing(2) }}>
                    Not Registered? <Link to="/signup">Sign Up!</Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default LoginPage;
