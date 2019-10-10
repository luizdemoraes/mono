import styled from "styled-components";

export const Palettes = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: 1fr;
  width: 100%;
  min-height: calc(100vh - 80px); /* 100vh - header height */
  background-color: var(--border);

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Notification = styled.span`
  --translateY: ${props => (props.show ? "0" : "-1000%")};

  display: flex;
  align-items: center;
  height: var(--space-md);
  padding: 0 var(--space-sm);
  position: fixed;
  left: 50%;
  top: var(--space-xxl);
  transform: translateX(-50%) translateY(var(--translateY));
  z-index: 9000;
  white-space: nowrap;
  will-change: transform;
  transition: transform 600ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background-color: black;
  border-radius: var(--radius);
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);

  @media only screen and (min-width: 768px) {
    top: calc(var(--space-xxl) + var(--space-xs));
    font-size: 12px;
  }
`;
