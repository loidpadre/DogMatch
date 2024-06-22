import { Wrapper } from "./style"

export const CteSection = () =>{
    return(
        <Wrapper>
            <div className="col-1">
                <img src="https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=67773a9d419786091c958b2ad08eae5e" alt="" />
            </div>
            <div className="col-2">
                <h1>Mais um mebro da <span>família</span></h1>
                <p>Adotar um cão é uma grande decisão e queremos que você faça isso com total confiança e conhecimento. Descubra seu CãoPerfeito hoje mesmo!</p>
                <button>Ver todas as Raças</button>
            </div>
        </Wrapper>
    )
}