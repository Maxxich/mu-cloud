import { Header } from "entities/UI"
import { Button } from "shared/UI"
import styled from "styled-components"

export const CropperContainer = styled.div`

`
export const Container = styled.div`

`
export const Inner = styled.div<{isMobile: boolean}>`

`


export const ErrorMessage = styled.p`

`

export const PositionButton = styled(Button)`
flex: 0 0 auto;
-webkit-box-shadow: 0px 0px 58px 49px rgba(1, 1, 1, 1);
-moz-box-shadow: 0px 0px 58px 49px rgba(1, 1, 1, 1);
box-shadow: 0px 0px 58px 49px rgba(1, 1, 1, 1);
`

export const PositionHeader = styled(Header)`
-webkit-box-shadow: 0px 0px 58px 49px rgba(1, 1, 1 1);
-moz-box-shadow: 0px 0px 58px 49px rgba(1, 1, 1, 1);
box-shadow: 0px 0px 58px 49px rgba(1, 1, 1, 1);
flex: 0 0 auto;
`

export const Info = styled.p`
position: fixed;
top: 70px;
left: 50%;
transform: translateX(-50%);
color: var(--secondary-color);
font-size: 1.4rem;
line-height: 1.8rem;
text-align: center;
max-width: 90%;
`