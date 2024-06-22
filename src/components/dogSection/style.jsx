import styled from "styled-components";
import { colors } from "../../gobalColor/colors";
export const Wrapper = styled.section`
    max-width: 1300px;
    margin: -200px auto;
    position: relative;
    .circle{
        height: 500px;
        width: 500px;
        border-radius: 50%;
        top: 190px;   
        left: -400px;
        position: absolute;
        background-color: ${colors.verd};
        z-index: -1000;
    }
    .cards{

        display: grid;
        grid-template-columns: 25% 25% 25%;
        justify-content: center;
        gap:40px;
        .card{
            width: 100%;
            height: 380px;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            gap: 30px;
            box-shadow: 2px 3px  3px ${colors.cinza};
            text-align: center;
            cursor: pointer;
            transition: .5s ease;
            img{
                width: 100%;
                border-radius: 12px;
            }
            &:hover{
                box-shadow: 6px 6px 6px ${colors.cinza};
            }
            h1{
                color: ${colors.verd};
                font-weight: 300;
                
            }
        }
    }
`