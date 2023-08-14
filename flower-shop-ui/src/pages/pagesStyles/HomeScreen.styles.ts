import styled from "styled-components";


export const HeaderWrapper = styled.div`
    margin: 0;
    background: rgb(203,141,98);
    background: linear-gradient(90deg, rgba(203,141,98,1) 0%, rgba(170,128,91,1) 3%, rgba(146,118,85,1) 6%, rgba(110,103,77,1) 12%, rgba(81,91,71,1) 18%, rgba(52,79,64,1) 27%, rgba(42,75,62,1) 42%, rgba(38,73,61,1) 65%, rgba(11,63,55,1) 76%);
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
    color: #FFFFFF;
    font-family: 'Montserrat', serif;
    font-size: 22px;
    padding-left: 150px;
    position: relative;
`

export const HeaderIconsWrapper = styled.div`
    position: absolute;
    top: 3%;
    right: 20%;
    z-index: 100;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const HeaderIcon = styled.div`
    margin-right: 15px;
    cursor: pointer;
    background: #FFF;
    padding: 20px 10px;
`;


