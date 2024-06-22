import { colors } from "../../../gobalColor/colors";
import styled from "styled-components"
export const Wrapper = styled.header`
max-width: 1300px;
margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .col-1{
        width:708px;
        h1{
            font-size: 47px;
            width: 594px;
            font-family: "Mochiy Pop One", sans-serif;;
            color: ${colors.laranja};
        }
    }
`