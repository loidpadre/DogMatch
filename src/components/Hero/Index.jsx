import { Wrapper } from "./style"
import IMG from "../../assets/fundo.png"
export const Hero = () =>{
    return(
       <Wrapper>
        <img src={IMG} alt="" />
        <div className="container">
            <div className="text">
                <h1>Seu Guia Definitivo para Encontrar o Companheiro <span>Ideal!</span></h1>
                <p>Você está pronto para encontrar o amigo peludo que se encaixa perfeitamente no seu estilo de vida? No CãoPerfeito, oferecemos tudo o que você precisa saber sobre diferentes raças de cães, ajudando você a tomar a decisão certa antes de trazer um novo membro para a sua família.</p>
                <div className="btns">
                    <button className="explore">Explore</button>
                    <button className="descubre">Descubre</button>
                </div>
            </div>
        </div>
       </Wrapper>
    )
}