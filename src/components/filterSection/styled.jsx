import {colors} from "../../gobalColor/colors"
import styled from "styled-components"
export const Wrapper = styled.div`
    max-width: 1300px;
    margin: 350px auto;
    .col-1{
        display: flex;
        flex-direction:column;
        gap:30px;
        width: 500px;
        h2{
            font-weight: 400;
        }
        .filters{
            display:flex;
            gap: 20px;
            select{
                padding: 10px 6px;
                font-size:16px;
                border:none;
                outline: none;
                border-radius: 12px;
                background-color: ${colors.verd};
                color: ${colors.branco}
            }
        }
    }
`    