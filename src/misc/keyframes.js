import { keyframes } from 'styled-components';

export function getFadeUpKeyframes ({ from = 100, to = 0 }) {
  return keyframes`
    from {
      top: ${from}%;
    } to {
      top: ${to}%;
    }
  `;
}