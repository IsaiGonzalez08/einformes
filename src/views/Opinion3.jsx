import { useNavigate } from 'react-router-dom';


import CuadronDoc from '../assets/img/CuadronDoc.png'
import CuadroOPI from '../assets/img/CuadroOPI.png'
import Back from '../assets/img/Back.png'

import '../assets/styles/Opinion2.css'

export const Opinion3 = () => {

    const navigate = useNavigate();

    const handleClickEnviar = () => {
        navigate();
    }

    const handleClickAtras = () => {
        navigate("/opinion2")
    };

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
            </div>
        </>
    )
}