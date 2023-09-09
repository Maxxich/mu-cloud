import { motion } from 'framer-motion';
import * as React from 'react';
import { Link, LinkProps, To } from 'react-router-dom';
import { IIcon } from 'shared/UI';
import styled from 'styled-components';

export const Container = styled(motion.div)`
width: 100%;
height: 20px;
display: flex;
align-items: center;
justify-content: flex-start;
gap: 6px;
color: var(--primary-color);
font-size: 1.6rem;
line-height: 1.6rem;
`

export const ContainerLink = styled(motion(Link))`
width: 100%;
height: 20px;
display: flex;
align-items: center;
justify-content: flex-start;
gap: 6px;
color: var(--primary-color);
font-size: 1.6rem;
line-height: 1.6rem;
`


interface ILink  {
  to: To
  extraIcon: React.ReactElement<IIcon>
  text: string
  onClick?: never
}
interface IDiv {
  to?:never
  extraIcon: React.ReactElement<IIcon>
  text: string
  onClick: () => void
}

type IActionProps = ILink | IDiv

export const Action: React.FunctionComponent<IActionProps> = ({
  extraIcon,
  text,
  onClick,
  to
}) => {

  const extraIconWithProps = React.Children.map(extraIcon, child => {
    if (!extraIcon) return <></>
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {color: 'var(--secondary-color)', size: 18});
    }
    return child;
  });

  if (to) {
    return (
      <ContainerLink to={to}>
        {extraIconWithProps}
        <span>{text}</span>
      </ContainerLink>
    )
  }

  return (
    <Container onClick={onClick}>
      {extraIconWithProps}
      <span>{text}</span>
    </Container>
  );
};