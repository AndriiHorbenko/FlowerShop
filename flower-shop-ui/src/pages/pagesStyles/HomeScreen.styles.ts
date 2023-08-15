import styled from "styled-components";
import BG from "./../../assets/BG.png"

export const HeaderWrapper = styled.div`
    background-size: 100% 100%; /* Зменшуємо картинку так, щоб вона вмістилася всередині блоку */
    background-position: center;
    background-repeat: no-repeat; /* Вимикаємо повторення фонової картинки */
    height: 500px;
    display: flex;
    justify-content: flex-start;
    padding-top: 30px;
    box-sizing: border-box;
    align-items: flex-start;
    gap: 40px;
    color: #FFFFFF;
    font-family: 'Raleway',sans-serif;
    font-size: 22px;
    padding-left: 150px;
    position: relative;
`;

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

export const FooterWrapper = styled.div`
    background: rgb(203,141,98);
    padding: 40px 200px;
    background: linear-gradient(90deg, rgba(203,141,98,1) 0%, rgba(170,128,91,1) 3%, rgba(146,118,85,1) 6%, rgba(110,103,77,1) 12%, rgba(81,91,71,1) 18%, rgba(52,79,64,1) 27%, rgba(42,75,62,1) 42%, rgba(38,73,61,1) 65%, rgba(11,63,55,1) 76%);
    height: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
    font-family: 'Raleway',sans-serif;
    font-size: 22px;
    padding-left: 150px;
    position: relative;
`;
export const FooterRightWrapper = styled.div`
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: #FFFFFF;
    font-family: 'Raleway',sans-serif;
    font-size: 22px;
    position: relative;
    width: 570px;
    gap: 50px;
`;

export const FooterA = styled.a`
    cursor: pointer;
    display: block;
    font-family: 'Raleway', sans-serif;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    &:hover {
        text-decoration: underline; /* Застосувати підкреслення при наведенні */
    }
`;
const Arrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    z-index: 1;
`;

export const ArrowLeft = styled(Arrow)`
    left: 20px;
`;

export const ArrowRight = styled(Arrow)`
    right: 20px;
`;

