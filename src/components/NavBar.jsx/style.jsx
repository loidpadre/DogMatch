import styled from "styled-components"
import {colors} from "../../gobalColor/colors"

export const Wrapper = styled.nav`
    width: 1300px;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;

    .logo{
        span{
            color: ${colors.laranja};
        }
        h1{
            color: ${colors.branco}
        }
    }
    .manu{
        ul{
            display: flex;
            align-items: center;
            gap: 30px;
            li{
                color: ${colors.branco};
                list-style: none;
                font-weight: 600;
                
            }
            .adote{
                    background-color: ${colors.laranja};
                    color: ${colors.branco};
                    padding: 8px 14px;
                    border-radius:12px;
                }
        }
    }
`