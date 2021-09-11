import styled from 'styled-components';

export const AnimatedContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    aligin-items: center;
    padding: 0 30px;
    height: 500px;
    position: relative;
    z-index: 1;

`;
export const AnimatedBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`;
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232c34;

`;

export const AnimatedContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const AnimatedH1 = styled.h1`
    margin-top: 20%;
    color: #fff;
    text-align: center;
    font-size: 48px;

   @media screen and (max-width: 768px){
       font-size: 40px;
   }
   @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;
export const AnimatedP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
   
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;
export const Button = styled.button`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

`;
export const AnimatedBtnWrapper = styled.div`
   display: flex;
   margin-top: 32px;
   flex-direction: columns;
   align-items: center;

`;