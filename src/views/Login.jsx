import { useState } from 'react';
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

    return (
        <>
            <div className="login">
                <form className="form">
                    <div className="titulo">
                        <h1>Bienvenido a <br /> E-Informes</h1>
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
                    <div className="creaCuenta">
                        <h4>¿Aún no tiene cuenta? <a href=''>Crea mi cuenta</a></h4>
                    </div>
                    <Button sx={{ 
                         my: 2,
                         color:'black',
                         background:'#82B6F350', 
                         height:'50px', 
                         fontFamily:'Montserrat',
                         fontWeight:'bold'}}  
                         fullWidth type="submit" variant="outlined">
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
