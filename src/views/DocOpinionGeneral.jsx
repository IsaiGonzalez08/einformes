import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
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

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import CuadronDoc from '../assets/img/CuadronDoc.png'
import CuadroOPI from '../assets/img/CuadroOPI.png'
import Back from '../assets/img/Back.png'

import '../assets/styles/DocOpinionGeneral.css'


export const DocOpinionGeneral = () => {

    const navigate = useNavigate();
    const [value, setValue] = useState(dayjs('2023-04-12'));

    const handleClickEnviar = () => {
        navigate("/opinion2");
    };

    const handleClickAtras = () => {
        navigate("/home")
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
                <div className="preguntas">
                    <div className="seccion1">
                        <div className="empresa">
                            <h3>Nombre de la empresa</h3>
                            <TextField
                                label="Empresa"
                                id="standard-size-normal"
                                defaultValue="Empresa"
                                variant="standard"
                                sx={{ width: '300px' }}
                            />
                        </div>
                        <div className="administracion">
                            <h3>La empresa se dirige a la administración</h3>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="General de Auditoría Fiscal Federal " control={<Radio />} label="General de Auditoría Fiscal Federal " />
                                    <FormControlLabel value="Administración desconcentrada" control={<Radio />} label="Administración desconcentrada" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="sede">
                            <h3>Escribe la sede</h3>
                            <TextField
                                label="Sede"
                                id="standard-size-normal"
                                defaultValue="Sede"
                                variant="standard"
                                sx={{ width: '300px' }}
                            />
                        </div>
                        <div className="fecha">
                            <h3>Fecha de emisión de la opinión</h3>
                            <DatePicker
                                label="Controlled picker"
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                            />
                        </div>
                        <div className="contribuyente">
                            <h3>Selecciona el tipo de contribuyente</h3>
                            <FormControl>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    Contribuyente
                                </InputLabel>
                                <NativeSelect
                                    defaultValue='--Seleccionar--'
                                    inputProps={{
                                        name: 'sede',
                                        id: 'uncontrolled-native',
                                    }}
                                    sx={{ width: '300px' }}
                                >
                                    <option value='--Seleccionar--'>Seleccionar</option>
                                    <option value='Contribuyente del regimen coordinado'>Es contribuyente del regimen Coordinado</option>
                                    <option value='Es contribuyentes del rémen  de AGAPES'>Es contribuyentes del rémen  de AGAPES</option>
                                    <option value='Es persona fisica dedicaxda al autotrasporte, no perteneciente a un coordinado.'>Es persona fisica dedicaxda al autotrasporte, no perteneciente a un coordinado.</option>
                                </NativeSelect>
                            </FormControl>
                        </div>
                    </div>




                    <div className="seccion2">
                        <div className="dictamen">
                            <h3>Selecciona el tipo de dictamen</h3>
                            <FormControl>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    Dictamen
                                </InputLabel>
                                <NativeSelect
                                    defaultValue='Seleccionar'
                                    inputProps={{
                                        name: 'sede',
                                        id: 'uncontrolled-native',
                                    }}
                                    sx={{ width: '300px' }}
                                >
                                    <option value='Seleccionar'>Seleccionar</option>
                                </NativeSelect>
                            </FormControl>
                        </div>
                        <div className="obligaciones">
                            <h3>Obligaciones fiscales</h3>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="Es sujeto directo y retenedor de contribuciones." control={<Radio />} label="Es sujeto directo y retenedor de contribuciones." />
                                    <FormControlLabel value="Es sujeto directo, retenedor y recaudador de contribuciones." control={<Radio />} label="Es sujeto directo, retenedor y recaudador de contribuciones." />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="empleados">
                            <h3>¿La empresa tiene empleados?</h3>
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
                        <div className="imss">
                            <h3>¿Se dictamina para IMSS o infonavit?</h3>
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
                        <div className="dictamina">
                            <h3>¿Por quien se dictamina?</h3>
                            <FormControl>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    ¿Por quien se dictamina?
                                </InputLabel>
                                <NativeSelect
                                    defaultValue='Seleccionar'
                                    inputProps={{
                                        name: 'sede',
                                        id: 'uncontrolled-native',
                                    }}
                                    sx={{ width: '300px' }}
                                >
                                    <option value='Seleccionar'>Seleccionar</option>
                                    <option value='Se dictamina para IMSS e Infonavit por otro contador'>Se dictamina para IMSS e Infonavit por otro contador</option>
                                    <option value='Se dictamina para IMSS e Infonavit por el mismo contador'>Se dictamina para IMSS e Infonavit por el mismo contador</option>
                                    <option value='Se dictamina solo para IMSS por otro contador'>Se dictamina solo para IMSS por otro contador</option>
                                    <option value='Se dictamina solo para IMSS por el mismo contador'>Se dictamina solo para IMSS por el mismo contador</option>                                   
                                </NativeSelect>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className="btnEnviar">
                    <Button variant="contained" onClick={handleClickEnviar} sx={{width:'280px'}}>Enviar</Button>
                </div>
            </div>
        </>
    )
}