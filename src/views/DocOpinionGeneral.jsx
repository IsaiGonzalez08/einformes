import CuadronDoc from '../assets/img/CuadronDoc.png'
import CuadroOPI from '../assets/img/CuadroOPI.png'

import '../assets/styles/DocOpinionGeneral.css'

import { TextField } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const DocOpinionGeneral = () => {

    const navigate = useNavigate();

    const handleClickEnviar = () => {
        navigate("/opinion2");
      };

    return (
        <>
            <img className='cuadroDoc' src={CuadronDoc} />
            <img className='cuadroOpi' src={CuadroOPI} />
            <div className="form2">
                <div className="encabezado">
                    <h1>Informe sobre la situación fiscal</h1>
                </div>
                <div className="Nombre-Fecha">
                    <div className="nombreE">
                        <h3>Ingrese nombre de la empresa</h3>
                        <TextField id="standard-basic" label="Nombre de la empresa" variant="standard" sx={{
                            width: '390px'
                        }} />
                    </div>
                    <div className="Fecha">
                        <h3>Fecha de emision de la opinión</h3>
                        <input type="date" />
                    </div>
                </div>


                <div className="Admi-Contri">
                    <div className="Admi">
                        <h3>La empresa se dirige a la administración:</h3>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="General de Auditoría Fiscal Federal " control={<Radio />} label="General de Auditoría Fiscal Federal" />
                                <FormControlLabel value="Administración desconcentrada" control={<Radio />} label="Administración desconcentrada" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="Contri">
                        <h3>Seleccione el tipo de contribuyente</h3>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="Contribuyente del regimen Coordinado" control={<Radio />} label="Contribuyente del regimen Coordinado" />
                                <FormControlLabel value="Contribuyentes del regimen de AGAPES" control={<Radio />} label="Contribuyentes del regimen de AGAPES" />
                                <FormControlLabel value="Persona física dedicada al autotransporte, no perteneciente a un coordinado."
                                    control={<Radio />} label="Persona física dedicada al autotransporte, no perteneciente a un coordinado." />
                                <FormControlLabel value="Ninguno de los anteriores"
                                    control={<Radio />} label="Ninguno de los anteriores" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>

                <div className="selects">
                    <div className="sede">
                        <h3>Seleccionar una sede</h3>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Seleccionar" />}
                        />
                    </div>
                    <div className="dictamen">
                        <h3>Seleccionar tipo de dictamen</h3>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Seleccionar" />}
                        />
                    </div>
                </div>

                <div className="btnEnviar">
                    <Button variant="contained" onClick={handleClickEnviar}>Enviar</Button>
                </div>

            </div>
        </>
    )
}