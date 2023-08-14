import styled from "styled-components";


export const ProductPageWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 10px;

`
export const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 35px;
`
export const ProductHeader = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-size: 40px;
  font-style: normal;
  line-height: 105.9%;
  color: #031412;
  font-weight: 400;
`

export const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-family: 'Raleway', sans-serif;

  & > p {
    & > span {
      font-size: 16px;
      font-style: normal;
      font-weight: 800;
      line-height: 132.4%;
      color: #031412;
    }
  }
`

export const InStockText = styled.p`
  color: #4B7159;
  font-size: 16px;
  font-style: normal;
  line-height: 132.4%;
  font-weight: 800;
`

export const ProductDescriptionText = styled.p`
  font-family: 'Raleway', sans-serif;
  color: #031412;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 132.4%;
`

export const ProductDescriptionHeader = styled.h2`
  font-family: 'Raleway', sans-serif;
  color: #031412;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 132.4%;
  text-transform: uppercase;
`

export const ProductDescriptionPrice = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color === 'red' ? '#9B0000' : '#031412'};
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 96.4%
`

export const PurchaseButton = styled.button`
  background: linear-gradient(150deg, #5E3928 0%, #E4A16F 91.15%);
  width: 400px;
  height: 50px;
  flex-shrink: 0;
  align-self: center;
  border: none;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 400;
  color: white;
  cursor: pointer;
  font-size: 25px;
`


export const ImageWrapper = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between`

export const LineWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px; /* Регулируйте отступ в зависимости от ваших потребностей */

  & > div {
    padding-bottom: 40px;
  }

  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #E6E8E7;
  }

`

export const BigProductDescriptionHeader = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  color: #031412;
  line-height: 105.9%;
`

export const BigProductDescriptionText = styled.p`
  font-family: 'Raleway', sans-serif;
  color: #031412;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 132.4%;
`

export const ReviewsHeader = styled.h3`
  color: #031412;
  font-family: 'Raleway', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 105.9%;
`

export const ReviewWrapper = styled.div`
  box-sizing: border-box;
  padding: 30px 30px;
  width: calc(100% / 3.6);
  margin-top: 40px;
  background: #FFF;
  text-align: start;
  gap: 40px;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.10);
`

export const ReviewHeader = styled.h3`
  color: #031412;
  font-family: 'Raleway', sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 96.4%;
`

export const ReviewText = styled.h3`
  color: #031412;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 134.4%;
`

export const ReviewDate = styled.p`
  color: #031412;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: 134.4%;
`

export const ReviewsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SaleElem = styled.h4`
  color: #FFF;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  z-index: 10;
  font-style: normal;
  margin: 10px 10px;
  font-weight: 900;
  line-height: 96.4%; /* 19.28px */
  text-transform: uppercase;
`


export const SvgContainer = styled.div`
  position: absolute;
  top: 3%;
  right: 53%;
  z-index: 100;
  cursor: pointer;
  background: #FFF;
  padding: 20px 10px;
`




