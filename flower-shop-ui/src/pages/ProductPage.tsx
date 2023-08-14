import React from "react";
import destilator from "../assets/destilator.png"
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import {
    BigProductDescriptionHeader,
    BigProductDescriptionText,
    ImageWrapper,
    InStockText,
    LineWrapper,
    ProductDescriptionHeader,
    ProductDescriptionPrice,
    ProductDescriptionText,
    ProductHeader,
    ProductPageWrapper,
    ProductWrapper,
    PurchaseButton,
    ReviewDate,
    ReviewHeader,
    ReviewsContainer,
    ReviewsHeader,
    ReviewText,
    ReviewWrapper, SaleElem, SvgContainer,
    TextWrapper
} from "./pagesStyles/ProductPage.styles";

export function ProductPage() {
    return (
        <ProductPageWrapper>
            <p>Главная / Каталог / Дистиллятор для получения гидролата 8л</p>
            <LineWrapper>
                <ProductWrapper>
                    <div>
                        <div style={{background: "#9B0000",
                            position: "absolute",
                            top: "40px",
                            left: 0,
                            zIndex:100,
                        }}>
                        <SaleElem>sale</SaleElem>
                        </div>
                        <SvgContainer>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 30 29" fill="none">
                                <g >
                                    <path d="M21.4154 3.10892C20.0547 3.12935 18.7237 3.49608 17.5569 4.17207C16.39 4.84805 15.4285 5.80936 14.7695 6.95892C14.1105 5.80936 13.1491 4.84805 11.9822 4.17207C10.8153 3.49608 9.48433 3.12935 8.12369 3.10892C5.95466 3.19991 3.91108 4.11605 2.43943 5.65719C0.967768 7.19833 0.187656 9.2392 0.269522 11.3339C0.269522 16.6388 6.0526 22.4324 10.9029 26.3606C11.9858 27.2392 13.355 27.7209 14.7695 27.7209C16.1841 27.7209 17.5533 27.2392 18.6362 26.3606C23.4864 22.4324 29.2695 16.6388 29.2695 11.3339C29.3514 9.2392 28.5713 7.19833 27.0996 5.65719C25.628 4.11605 23.5844 3.19991 21.4154 3.10892ZM17.0835 24.5756C16.4358 25.1022 15.6163 25.391 14.7695 25.391C13.9228 25.391 13.1032 25.1022 12.4556 24.5756C6.24715 19.5461 2.68619 14.7208 2.68619 11.3339C2.60359 9.85775 3.12888 8.40994 4.1475 7.30623C5.16612 6.20253 6.59543 5.53249 8.12369 5.44225C9.65195 5.53249 11.0813 6.20253 12.0999 7.30623C13.1185 8.40994 13.6438 9.85775 13.5612 11.3339C13.5612 11.6433 13.6885 11.9401 13.9151 12.1589C14.1417 12.3777 14.449 12.5006 14.7695 12.5006C15.09 12.5006 15.3973 12.3777 15.6239 12.1589C15.8505 11.9401 15.9779 11.6433 15.9779 11.3339C15.8953 9.85775 16.4205 8.40994 17.4392 7.30623C18.4578 6.20253 19.8871 5.53249 21.4154 5.44225C22.9436 5.53249 24.3729 6.20253 25.3915 7.30623C26.4102 8.40994 26.9355 9.85775 26.8529 11.3339C26.8529 14.7208 23.2919 19.5461 17.0835 24.5709V24.5756Z" fill="#031412"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_70_770">
                                        <rect width="29" height="28" fill="white" transform="translate(0.269531 0.872406)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </SvgContainer>
                    <img src={destilator} alt="" style={{position:"relative"}}/>
                    </div>
                    <div>
                        <LineWrapper>
                            <ProductHeader>Дистиллятор для получения гидролата 8л</ProductHeader>
                            <TextWrapper>
                                <InStockText>В наличии</InStockText>
                                <p>Артикул:<span> CP-0803</span></p>
                            </TextWrapper>
                        </LineWrapper>
                        <LineWrapper>
                            <div>
                                <ProductDescriptionHeader>Описание</ProductDescriptionHeader>
                                <ProductDescriptionText>
                                    Медный дистиллятор «Феникс» станет Вашим надёжным помощником и проводником в мир
                                    дистилляции
                                    и красоты, с которым Вы легко сможете получать свои любимые гидролаты или
                                    алкогольные
                                    напитки.
                                </ProductDescriptionText>
                            </div>
                        </LineWrapper>
                        <LineWrapper>
                            <div>
                                <TextWrapper>
                                    <ProductDescriptionPrice>Цена</ProductDescriptionPrice>
                                    <ProductDescriptionPrice color={"red"}>10 953 грн</ProductDescriptionPrice>
                                </TextWrapper>
                                <TextWrapper>
                                    <p>кол-во</p>
                                    <PurchaseButton>Купить</PurchaseButton>
                                </TextWrapper>
                            </div>
                        </LineWrapper>
                        <TextWrapper>
                            <ProductDescriptionHeader>Поделиться:</ProductDescriptionHeader>
                            <ImageWrapper>
                                <img src={instagram} alt="instagram" width={25} height={25}/>
                                <img src={facebook} alt="facebook" width={25} height={25}/>
                                <img src={twitter} alt="twitter" width={25} height={25}/>
                            </ImageWrapper>
                        </TextWrapper>
                    </div>
                </ProductWrapper>
            </LineWrapper>
            <LineWrapper>
                <div>
                    <BigProductDescriptionHeader>Описание</BigProductDescriptionHeader>
                    <BigProductDescriptionText>
                        Для всех, кто хочет самостоятельно получать гидролат или дистиллят, и быть уверенным в его
                        качестве – у
                        нас есть готовое и удобное решение. Современный дистиллятор «Феникс» станет для Вас отличным
                        помощником.
                        Полностью медный аппарат изготовлен на собственном производстве, на основании многолетнего опыта
                        работы
                        с медными дистилляторами.

                        Гораздо практичней, чем алькитара, и ни в чём ей не уступающий. Даже наоборот, имеет ряд
                        преимуществ,
                        таких как толщина металла, надёжные, сварные швы, и деревянные ручки, которые не так
                        нагреваются, как
                        латунные. Соединение ароматизационной колонны с емкостью герметично и долговечно. Радиатор
                        данного
                        аппарата расходует в 3 раза меньше воды для охлаждения, в сравнении с алькитарой такого же
                        объёма.

                        Замечательный аппарат прослужит для Вас долгие годы и будет радовать своего владельца гидролатом
                        высокого качества. Оцените все преимущества паровой дистилляции и получайте гидролаты, в
                        натуральности
                        которых Вы можете быть уверенны. Аппарат полностью укомплектован и готов к работе. Объём
                        перегонного
                        куба – 8 литров. Объём колонны – 0,8 литра. Аппарат полностью укомплектован и готов к
                        эксплуатации.
                    </BigProductDescriptionText>
                </div>
            </LineWrapper>
            <div>
                <TextWrapper>
                    <ReviewsHeader>Отзывы</ReviewsHeader>
                    <PurchaseButton>Оставить отзыв</PurchaseButton>
                </TextWrapper>
                <ReviewsContainer>
                    <ReviewWrapper>
                        <img
                            src="https://s3-alpha-sig.figma.com/img/ef14/5244/d411162664935f24472a9fd69b8a8572?Expires=1692576000&Signature=JBiw4kmsqZF5avjsFIMsWpmgkvvVvUD2zRqEjW9wLg0vjU~yxuPjZ4j80Yb618ZDzow3yuTKCHQCwORi7IghqmWkedxw8-pRE4wJxftKtKuptRyG1e8DNfZ4FZu57figdwJ4Y~iPpd0KQMDyt7Qiv6mem1fern~xPx8xtQSyNajuL-NoYbC4J2bD~UH~0m7xO0inFLr4jUM5~Y5TynS-lbq-sDjLH4FTy4rC17o5DskDXI44hz1hHiFwBbIlCWsFsVzLaEVUzKNJKs1u-SKn1vmY5hX9JdkK5ckd9xCK2X7UK5Xzhl9KB7t065AaP1GoFyQHfScV57Mcoz5-rcj3jA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt="photo" width={70} height={65} style={{objectFit: "cover"}}/>
                        <ReviewHeader>Иван Иванов</ReviewHeader>
                        <ReviewText>
                            Наше оборудование прозводится вручную. Мы постоянно производим контроль качества
                            произведенной
                            продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2
                            лет
                            происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.
                        </ReviewText>
                        <ReviewDate>20.10.21</ReviewDate>
                    </ReviewWrapper>
                    <ReviewWrapper>
                        <img
                            src="https://s3-alpha-sig.figma.com/img/ef14/5244/d411162664935f24472a9fd69b8a8572?Expires=1692576000&Signature=JBiw4kmsqZF5avjsFIMsWpmgkvvVvUD2zRqEjW9wLg0vjU~yxuPjZ4j80Yb618ZDzow3yuTKCHQCwORi7IghqmWkedxw8-pRE4wJxftKtKuptRyG1e8DNfZ4FZu57figdwJ4Y~iPpd0KQMDyt7Qiv6mem1fern~xPx8xtQSyNajuL-NoYbC4J2bD~UH~0m7xO0inFLr4jUM5~Y5TynS-lbq-sDjLH4FTy4rC17o5DskDXI44hz1hHiFwBbIlCWsFsVzLaEVUzKNJKs1u-SKn1vmY5hX9JdkK5ckd9xCK2X7UK5Xzhl9KB7t065AaP1GoFyQHfScV57Mcoz5-rcj3jA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt="photo" width={70} height={65} style={{objectFit: "cover"}}/>
                        <ReviewHeader>Иван Иванов</ReviewHeader>
                        <ReviewText>
                            Наше оборудование прозводится вручную. Мы постоянно производим контроль качества
                            произведенной
                            продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2
                            лет
                            происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.
                        </ReviewText>
                        <ReviewDate>20.10.21</ReviewDate>
                    </ReviewWrapper>
                    <ReviewWrapper>
                        <img
                            src="https://s3-alpha-sig.figma.com/img/ef14/5244/d411162664935f24472a9fd69b8a8572?Expires=1692576000&Signature=JBiw4kmsqZF5avjsFIMsWpmgkvvVvUD2zRqEjW9wLg0vjU~yxuPjZ4j80Yb618ZDzow3yuTKCHQCwORi7IghqmWkedxw8-pRE4wJxftKtKuptRyG1e8DNfZ4FZu57figdwJ4Y~iPpd0KQMDyt7Qiv6mem1fern~xPx8xtQSyNajuL-NoYbC4J2bD~UH~0m7xO0inFLr4jUM5~Y5TynS-lbq-sDjLH4FTy4rC17o5DskDXI44hz1hHiFwBbIlCWsFsVzLaEVUzKNJKs1u-SKn1vmY5hX9JdkK5ckd9xCK2X7UK5Xzhl9KB7t065AaP1GoFyQHfScV57Mcoz5-rcj3jA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt="photo" width={70} height={65} style={{objectFit: "cover"}}/>
                        <ReviewHeader>Иван Иванов</ReviewHeader>
                        <ReviewText>
                            Наше оборудование прозводится вручную. Мы постоянно производим контроль качества
                            произведенной
                            продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2
                            лет
                            происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.
                        </ReviewText>
                        <ReviewDate>20.10.21</ReviewDate>
                    </ReviewWrapper>
                </ReviewsContainer>
            </div>
        </ProductPageWrapper>
    );
}
