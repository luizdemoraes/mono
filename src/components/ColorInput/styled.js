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
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  background-color: var(--background);
`;

export const Input = styled.input`
  color: black;
  font-weight: 600;
  display: flex;
  width: var(--space-xxl);
  height: 100%;
  border: unset;
  padding-left: 12px;
  background: unset;
  outline: none;
  text-transform: uppercase;
`;

export const ColorPicker = styled.span`
  display: block;
  width: var(--space-sm);
  height: var(--space-sm);
  flex-shrink: 0;
  border-radius: 50%;
  margin-right: var(--space-xxs);
  background-color: ${props => props.color || "white"};
`;
