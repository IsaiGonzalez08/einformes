import { useNavigate } from 'react-router-dom';

import { TextField, 
    Radio, 
    RadioGroup,
    FormControlLabel, 
    FormControl, 
    Button, 
    NativeSelect, 
    InputLabel, 
    Stepper, 
    Step, 
    StepLabel } 
from '@mui/material';

import CuadronDoc from '../assets/img/CuadronDoc.png'
import CuadroOPI from '../assets/img/CuadroOPI.png'
import Back from '../assets/img/Back.png'

import '../assets/styles/Opinion2.css'


export const Opinion2 = () => {

    const navigate = useNavigate();

    const handleClickEnviar = () => {
        navigate("/opinion3");
    };

    const handleClickAtras = () => {
        navigate("/opinion")
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
                    <Stepper activeStep={0} nonLinear sx={{ width: '980px' }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </div>
                <div className="cuestionario">
                    <div className="sec1">
                        <div className="saldos">
                            <h3>¿Aplicó compensación de saldos a favor?</h3>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="Si" control={<Radio />} label="Si" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="devolucion">
                            <h3>¿Solicitó devoulución de saldos a favor?</h3>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="Si" control={<Radio />} label="Si" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="declaracion">
                            <h3>¿Presentó declaración anual complementaria <br />
                             de ejercicios anteriores?</h3>
                             <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="Si" control={<Radio />} label="Si" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="mensuales">
                            <h3>¿Presentó declaraciones complementarias <br />
                                mensuales del ejercicio?</h3>
                                <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="Si" control={<Radio />} label="Si" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="ventas">
                            <h3>¿Determina costo de ventas?</h3>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="Si" control={<Radio />} label="Si" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div className="sec2">
                            <div className="Administrativa">
                                <h3>¿Obtuvo resoluciones favorables del <br /> tribunal federal de justicia administrativa?</h3>
                                <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="Si" control={<Radio />} label="Si" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                            </div>
                            <div className="justicia">
                                <h3>¿Obtuvo resoluciones favorables de la <br /> suprema corte de justicia?</h3>
                                <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="Si" control={<Radio />} label="Si" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                            </div>
                            <div className="acciones">
                                <h3>¿Es responsable solidaria como retenedora <br /> en la enajenación de acciones?</h3>
                                <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="Si" control={<Radio />} label="Si" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                            </div>
                            <div className="fluctuaciones">
                                <h3>¿Registro fluctuaciones cambiarias?</h3>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="Si" control={<Radio />} label="Si" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                            </div>
                    </div>
                </div>
                <div className="btnEnviar2">
                    <Button variant="contained" onClick={handleClickEnviar} sx={{width:'280px'}}>Enviar</Button>
                </div>
            </div>
        </>
    )
}