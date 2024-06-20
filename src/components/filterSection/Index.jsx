import { Wrapper } from "./styled"

export const FilterSection = () =>{
    return(
        <Wrapper>
            <div className="col-1">
            <h2>Conheça cada raça a fundo com nossos perfis completos, que incluem histórico, temperamento, porte físico, e muito mais!</h2>
            <div className="filters">
                <select>
                    <option value="" >Porte físico</option>
                    <option value="pequeno" disabled >Pequeno</option>
                    <option value="Medio" disabled >Medio</option>
                    <option value="Grande" disabled >Grande</option>
                </select>
                <select>
                    <option value="" >Temperamento</option>
                    <option value="pequeno" disabled >Pequeno</option>
                    <option value="Medio" disabled >Medio</option>
                    <option value="Grande" disabled >Grande</option>
                </select>
                <select>
                    <option value="" >País</option>
                    <option value="pequeno" disabled >Pequeno</option>
                    <option value="Medio" disabled >Medio</option>
                    <option value="Grande" disabled >Grande</option>
                </select>
            </div>
            </div>
        </Wrapper>
    )
}