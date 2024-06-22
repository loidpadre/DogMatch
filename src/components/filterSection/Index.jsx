import { Wrapper } from "./styled"
import {FaSearch} from "react-icons/fa"

export const FilterSection = () =>{
    return(
        <Wrapper>
            <div className="col-1">
            <h2>Conheça cada raça a fundo com <span>nossos</span> <span>perfis completos</span>, que incluem histórico, temperamento, porte físico, e muito mais!</h2>
            <div className="filters">
                <select>
                    <option value="" disabled >Porte físico</option>
                    <option value="pequeno" >Pequeno</option>
                    <option value="Medio" >Medio</option>
                    <option value="Grande" >Grande</option>
                </select>
                <select>
                    <option value="" disabled >Temperamento</option>
                    <option value="pequeno" >Calmo</option>
                    <option value="Medio" >Agressivo</option>
                    <option value="Grande" >Amigavel</option>
                </select>
                <select>
                    <option value="" disabled >País</option>
                    <option value="pequeno" >Brasil</option>
                    <option value="Medio" >Italia</option>
                    <option value="Grande" >Usa</option>
                    <option value="Grande" >França</option>
                    <option value="Grande" >Usa</option>
                    <option value="Grande" >Argrntina</option>
                    <option value="Grande" >Alemanha</option>
                </select>
            </div>
            </div>
            <div className="col-2">
                <form>
                    
                    <div className="inp">
                        <div className="icon">
                        <FaSearch/>
                        </div>
                    <input type="text" placeholder="Digite o nome da raça aqui" />
                    </div>
                </form>
            </div>
        </Wrapper>
    )
}