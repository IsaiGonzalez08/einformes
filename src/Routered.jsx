import { Home } from '../src/views/Home'
import { Login } from '../src/views/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DocOpinionGeneral } from './views/DocOpinionGeneral'
import { Opinion2 } from './views/Opinion2'
import { Opinion3 } from './views/Opinion3'


export const Routered = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/opinion" element={<DocOpinionGeneral/>}/>
                    <Route path='/opinion2' element={<Opinion2/>} />
                    <Route path='/opinion3' element={<Opinion3/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}