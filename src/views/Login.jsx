import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, InputLabel, InputAdornment, FormControl, FilledInput, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Rectangulo from '../assets/img/Rectangle1.png'
import '../assets/styles/Login.css'

export const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const navigate = useNavigate();

    const handleClickLogin = () => {
        navigate("/Home");
      };

    return (
        <>
            <div className="login">
                <form className="form">
                    <div className="titulo">
                        <h1>Bienvenido a E-Informes</h1>
                    </div>
                    <FormControl sx={{ my: 2 }} variant="filled" fullWidth>
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Username
                        </InputLabel>
                        <FilledInput
                            name="email"
                            id="input-with-icon-adornment"
                            endAdornment={
                                <InputAdornment edge="end">
                                    <AccountCircleIcon />
                                </InputAdornment>
                            }
                        ></FilledInput>
                    </FormControl>
                    <FormControl sx={{ my: 2 }} variant="filled" fullWidth>
                        <InputLabel fullWidth>Contraseña</InputLabel>
                        <FilledInput
                            name="password"
                            id="filled-adornment-password"
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Button color="secondary"
                        style={{ fontSize: '.79em' }}
                        sx={{ color:'#82B6F3' }}
                        align='left' textSizeSmall
                        >¿Aún no tienes una cuenta? Crea tú cuenta aquí</Button>
                    <Button sx={{
                        my: 2,
                        height: '50px',
                        fontFamily: 'Montserrat',
                        fontWeight: 'Bolder',
                        
                    }}
                        fullWidth type="submit" variant="contained"
                        onClick={handleClickLogin}>
                        Iniciar Sesión
                    </Button>
                </form>
                <div className="rectangulo">
                    <img src={Rectangulo} />
                </div>
            </div>
        </>
    );
}
