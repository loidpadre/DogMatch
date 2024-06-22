import {colors} from "../../gobalColor/colors"
import styled from "styled-components"
export const Wrapper = styled.div`
    max-width: 1300px;
    margin: 350px auto;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    align-items: end;
    .col-1{
        display: flex;
        flex-direction:column;
        gap:30px;
        width: 500px;
        span{
            color: ${colors.laranja};
        }
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
                color: ${colors.branco};
                option{
                    background-color: ${colors.branco};
                    color: ${colors.laranja};
                }
            }
        }
    }
    .col-2{
        form{
            .inp{
                
                border-bottom: 1px solid ${colors.cinza};
                align-items: center;
                display: flex;
                gap: 20px;
                .icon{
                    padding-left: 10px;
                    cursor: pointer;
                }
            }
            
            input{
                width: 500px;
                outline: none;
                padding: 10px;
                border: none;
            }
        }
    }
`    