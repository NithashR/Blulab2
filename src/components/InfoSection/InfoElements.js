import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#000')};

    @media screen and (max-width: 768px){ 
        padding: 100px 0;
    }

`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index:1;
    height: 1000px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    color: #fff;
    @media screen and (max-width: 768px){
        font-size: 16px;
        left:10%
    }

    @media screen and (max-width: 480px)
    {
        font-size: 14px;
        left: 70%;
    }
`;

export const InfoWrapper2 = styled.div`
    z-index:1;
    height: 1800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const ProjectWrapper = styled.div`
    display: grid;
    z-index:1;
    height: 700px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: flex;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => 
        imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgStart }) => 
            imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const InfoRow2 = styled.div`
    display: grid;
    margin-top: 100px;
    margin-bottom: -250px;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: ${({ imgStart }) => 
        imgStart ? `'col-4 col'` : `'col col-4'`};
    height: 400px;

    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgStart }) => 
            imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const Column = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col;
    width: 800px;
    @media screen and (max-width: 768px){
        grid-area: col1;
    }
`;

export const Column4 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col-4;
    @media screen and (max-width: 768px){
        grid-area: col2;
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    
    

`;

export const Sidebar = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: sidebar;
`;

export const Main = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: main;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

     @media screen and (max-width: 768px){
        width: 50%;
    }

    @media screen and (max-width: 480px)
    {
        width: 50%;
    }
`;

export const Row1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: row1;
`;


export const TextWrapper = styled.div`
    max-width: 1000px;
    padding-top: 0;
    padding-bottom: 60px;
    padding-left: 10px;

    @media screen and (max-width: 480px){
        max-width: 200px;
        color: aqua;
    }

     @media screen and (max-width: 768px){
        width: 90%;
    }

    @media screen and (max-width: 480px)
    {
        width: 80%;
    }
    
`;


export const TopLine = styled.p`
    color: #0fc0ea;
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? 'black' : 'yellow')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const Description = styled.p`
    max-width: 750px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
`;

export const Subtitle = styled.p`
    max-width: 900px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
        @media screen and (max-width: 768px){
        font-size: 16px;
    }

    @media screen and (max-width: 480px)
    {
        font-size: 14px;
        left: 70%;
    }
`;

export const ContactInfo = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 20px;
    line-height: 30px;
    color: #fff;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: flex;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const Tops = styled.div`
    color: #ff0000;
    font-size: 2.0rem;
    align-items: center;
    margin: 0 0 10px 0;
`
