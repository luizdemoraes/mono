import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(var(--space-xl) * 2);
  height: var(--space-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  background-color: var(--background);
`;

export const Input = styled.input`
  display: flex;
  width: var(--space-xxl);
  height: 100%;
  padding-left: 12px;
  color: black;
  font-weight: 600;
  border: unset;
  outline: none;
  background: unset;
  text-transform: uppercase;
`;

export const PickedColor = styled.span`
  display: block;
  flex-shrink: 0;
  width: var(--space-sm);
  height: var(--space-sm);
  border-radius: 50%;
  margin-right: var(--space-xxs);
  background-color: ${props => props.currentColor};
`;
