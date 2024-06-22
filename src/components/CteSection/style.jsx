import { colors } from "../../gobalColor/colors"
import styled from "styled-components"
export const Wrapper = styled.section`
    width: 1300px;
    margin: 350px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .col-1{
        img{
            width: 400px;
            height: 400px;
            object-fit: cover;
            border-radius: 50%;
        }
    }
    .col-2{
        width: 602px;
        display: flex;
        flex-direction: column;
        gap: 25px;
        h1{
            color: ${colors.laranja};
            font-size: 48px;
            span{
                font-weight: 300;
                color: ${colors.verd};
            }
        }
        button{
            padding: 10px;
            background-color: ${colors.verd};
            color: ${colors.branco};
            border: none;
            border-radius: 12px;
            font-size: 18px;
        }

    }
`