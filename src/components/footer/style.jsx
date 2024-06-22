import styled from "styled-components"
import {colors} from "../../gobalColor/colors"
export const Wrapper = styled.footer`
    width: 100%;
    margin-top: 450px;
    .container{
        padding: 60px 0px 60px 0px;
        max-width: 1300px;
        margin: 0 auto;
        display: flex;
        background-color: black;
        justify-content: space-between;
        color: ${colors.branco};
        .programing{
            margin-bottom: 10px;
            color: ${colors.laranja};
        }
        span{
            color: ${colors.laranja};
        }
        .foot{
            text-align: center;
        }
        ul{
            li{
                list-style: none;
                margin: 10px;
            }
        }
    }
`