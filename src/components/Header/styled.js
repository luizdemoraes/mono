import styled from "styled-components";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: var(--space-xl);
  padding: 0 var(--space-sm);
  border-bottom: 1px solid var(--border);
  background-color: var(--background);
  box-shadow: 0 3px 5px 0 rgba(15, 15, 15, 0.08);

  @media only screen and (min-width: 768px) {
    position: relative;
    z-index: initial;
    height: var(--space-xxl);
    box-shadow: unset;
    padding: 0 var(--space-md);
  }
`;
