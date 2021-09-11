import styled from "styled-components"

export const ContentBox = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    max-width:100%;

    @media screen and (min-width: 1024px){
        flex-wrap:nowrap;
    }

`;

export const Box = styled.div`
    display:flex;
    width:auto;
    min-height:300px;
    flex-direction:column;
    justify-content: space-around;
    margin: 35px 15px;
    background-color: ${props => props.bgColor};
    border-radius:10px;
    opacity:0.7;
    border:1px solid #f2f3f4;

    &:hover{
        opacity:1;
        box-shadow:2px 2px 5px #f4f5f5;
    }
`;

export const BoxText = styled.p`
    color:#666;
    font-size:1.5rem;
    margin-top:5px;
    padding:10px 10px;

`;

export const BoxTitle = styled.h3`
    color:#333;
    font-size:2rem;
    text-align:center;
    padding:10px 10px;
`;
