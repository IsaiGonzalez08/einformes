import { useNavigate } from 'react-router-dom';
import {
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Button,
    NativeSelect,
    InputLabel,
    Stepper,
    Step,
    StepLabel,
    Input,
    InputAdornment,
    FormHelperText
}
    from '@mui/material';

import CuadronDoc from '../assets/img/CuadronDoc.png'
import CuadroOPI from '../assets/img/CuadroOPI.png'
import Back from '../assets/img/Back.png'

import '../assets/styles/Opinion3.css'

export const Opinion3 = () => {

    const navigate = useNavigate();

    const handleClickEnviar = () => {
        navigate();
    }

    const handleClickAtras = () => {
        navigate("/opinion2")
    };

    const steps = [
        'Datos',
        'Grupos',
        'Fin',
    ];

    return (
        <>
            <img className='cuadroDoc' src={CuadronDoc} />
            <img className='cuadroOpi' src={CuadroOPI} />
            <div className="form2">
                <div className="encabezado">
                    <div className="Back">
                        <button onClick={handleClickAtras}><img src={Back} /></button>
                    </div>
                    <div className="titulo">
                        <h1>Informe sobre la situación fiscal</h1>
                    </div>
                </div>
                <div className="step">
                    <Stepper activeStep={2} nonLinear sx={{ width: '980px' }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </div>
                <div className="secc1">
                    <div className="porcentaje">
                        <h3>¿Porcentaje de fluctuaciones cambiarias <br /> revisadas de utilidad cambiaria?</h3>
                        <FormControl variant="standard" sx={{m: 1, width: '300px' }}>
                            <Input
                                id="standard-adornment-weight"
                                endAdornment={<InputAdornment position="end">%</InputAdornment>}
                                aria-describedby="standard-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                            />
                            <FormHelperText id="standard-weight-helper-text">Porcentaje</FormHelperText>
                        </FormControl>
                    </div>
                    <div className="perdidas">
                        <h3>¿Porcentaje de fluctuaciones cambiarias <br />revisadas de perdida cambiaria?</h3>
                         <FormControl variant="standard" sx={{m: 1, width: '300px' }}>
                            <Input
                                id="standard-adornment-weight"
                                endAdornment={<InputAdornment position="end">%</InputAdornment>}
                                aria-describedby="standard-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                            />
                            <FormHelperText id="standard-weight-helper-text">Porcentaje</FormHelperText>
                        </FormControl>
                    </div>
                </div>
                <div className="secc2">

                </div>
            </div>
        </>
    )
}