import {colors} from "../../gobalColor/colors"
import styled from "styled-components"
export const Wrapper = styled.section`
    width: 1300px;
    margin: -200px auto;
    
    h1{
        margin: 0 auto;
        text-align: center;
        width: 300px;
        color: ${colors.laranja};
        span{
            color: ${colors.verd};
        }
    }
    .cards{
        margin-top: 60px;
        display: grid;
        grid-template-columns: 40% 40%;
        justify-content: center;
        align-items: center;
        gap: 20px;
        .card{
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 500px;
        }
    }
`