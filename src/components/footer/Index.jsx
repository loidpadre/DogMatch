import { Wrapper } from "./style"

export const Fotter = () =>{
    return(
        <Wrapper>
            <div className="container">
                <div>
                    <h1>Dog<span>Macth</span></h1>
                    <ul>
                        <li>Home</li>
                        <li>Raças de cães</li>
                        <li>Sobre</li>
                        <li>Contact</li>
                        <li>FaQ</li>
                    </ul>
                </div>
                <div>
                    <p className="programing">Contactos do programdor</p>
                    <ul>
                        <li>Loid Padre</li>
                        <li>loidpadre@gmil.com</li>
                        <li>https://linkedin.com/in/loidpadre</li>
                        <li>+55 (85) 996537401</li>
                        <li className="verd">Fale comigo/ www.loidpadre.com</li>
                    </ul>
                </div>
                
                <div className="foot">
                <p>Onde cada cão encontra seu lar ideal. 🐾</p>
                <span>© 2024 DogMatch. Todos os direitos reservados.</span>
                </div>
            </div>
            
        </Wrapper>
    )
}