import { Wrapper } from "./style"
import {FaHome} from "react-icons/fa"

export const DogActionSection = () =>{
    return(
        <Wrapper>
            <h1>Nessa tua nova  <span>familia</span>, você encontrará</h1>
            <div className="cards">
                <div className="card">
                    <FaHome/>
                    <h2>Olfato aguçado</h2>
                    <p>Os cães têm um olfato extremamente desenvolvido, sendo capazes de detectar odores em concentrações muito baixas.</p>
                </div>
                <div className="card">
                    <FaHome/>
                    <h2>Olfato aguçado</h2>
                    <p>Os cães têm um olfato extremamente desenvolvido, sendo capazes de detectar odores em concentrações muito baixas.</p>
                </div>
                <div className="card">
                    <FaHome/>
                    <h2>Olfato aguçado</h2>
                    <p>Os cães têm um olfato extremamente desenvolvido, sendo capazes de detectar odores em concentrações muito baixas.</p>
                </div>
                <div className="card">
                    <FaHome/>
                    <h2>Olfato aguçado</h2>
                    <p>Os cães têm um olfato extremamente desenvolvido, sendo capazes de detectar odores em concentrações muito baixas.</p>
                </div>
            </div>
        </Wrapper>
    )
}