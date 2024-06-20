import styled from "styled-components"
import { colors } from "../../gobalColor/colors"
export const Wrapper = styled.div`
    width: 100%;
    img{
        position: absolute;
        top: 0px;
        left: 0px;
        height: 1102px;
        z-index: -1;
        height: 960px;
        width: 100%;
        object-fit: cover;
    }
    .container{
        max-width: 1300px;
        margin: 189px auto;
        color: ${colors.branco};
        .text{
            display: flex;
            flex-direction: column;
            gap: 35px;
            width: 853px;
            span{
                color: ${colors.laranja}
            }
            h1{
                color: ${colors.branco};
                font-family: "Mochiy Pop One", sans-serif;
                font-size: 64px;
            }
            .btns{
                display: flex;
                gap: 35px;
                .explore{
                    background-color: ${colors.laranja};
                    padding: 8px 16px;
                    border: none;
                    border-radius: 12px;
                    font-size: 16px;
                    color: ${colors.branco};
                }
                .descubre{
                    border: none;
                    background-color: transparent;
                    color: ${colors.branco}

                }
            }
            
        }
    }
` 