import styled, { css } from 'styled-components';
import { ReactComponent as Cart } from '../../assets/icons/cart.svg';

const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  color: var(--color) !important;

  /* color: ${({ color }) => (color ? 'red' : 'black')}; */
  a {
    color: inherit;
  }
  /* ${center} */
`;

export const Icon = styled.div`
  ${center}
`;

Icon.Cart = styled(Cart)`
  path {
    stroke: ${({ state }) => (state ? 'red' : 'blue')};
  }
`;
