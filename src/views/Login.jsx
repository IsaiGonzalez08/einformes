import '../assets/styles/Login.css'
import Rectangulo from '../assets/img/Rectangle 1.png'

export const Login = () => {
    return(
        <>
        <div className="login">
            <form className="form">
                <div className="titulo">
                    <h1>Bienvenido a <br /> E-Informes</h1>
                </div>
                <div className="label">
                    <label htmlFor="">E-mail</label>
                </div>
                <div className="inputs">
                    <input type="email" />
                </div>
                <div className="label">
                    <label htmlFor="">Password</label>
                </div>
                <div className="inputs">
                    <input type="password" />
                </div>
                <div className="creaCuenta">
                    <h4>¿Aún no tiene cuenta? <a href=''>Crea mi cuenta</a></h4>
                </div>
                <div className="btnInicioSesion">
                    <button>Iniciar Sesión</button>
                </div>
            </form>
            <div className="rectangulo">
                <img src={Rectangulo}/>
            </div>
        </div>
        </>
    )
}