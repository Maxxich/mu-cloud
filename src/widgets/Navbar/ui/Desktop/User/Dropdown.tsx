import * as React from 'react';
import styled from 'styled-components';
import { Logout } from './Logout';

const Container = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
`

interface IDropdownProps {
}

export const Dropdown: React.FunctionComponent<IDropdownProps> = (props) => {
  return(
    <Container>
      <Logout/>
    </Container>
  );
};