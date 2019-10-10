import styled from "styled-components";

export const Box = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--space-sm);
  overflow: hidden;
  background-color: white;
  transition: 0.2s ease-in-out;

  @media only screen and (min-width: 768px) {
    padding: var(--space-md);
  }
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-top: var(--space-xs);

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const List = styled.ul`
  flex: 1;
  margin-top: var(--space-sm);
  display: grid;
  grid-gap: 4px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, minmax(var(--space-lg), 1fr));
  background-color: white;
  overflow: hidden;
  list-style: none;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, minmax(var(--space-xl), 1fr));
  }
`;

export const Item = styled.li`
  position: relative;
  display: block;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: var(--radius);
  background-color: ${props => props.color};
  
  @media only screen and (min-width: 1024px) {
    &:after {
      opacity: 0;
      content: '${props => props.color}';
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      border-radius: 6px;
      padding: 4px var(--space-xxs);
      color: white;
      background-color: rgba(0, 0, 0, .8);
      transition: opacity 0.2s;
      font-size: 12px;
      left: var(--space-xxs);
      bottom: var(--space-xxs);
    }
    
    &:hover:after {
      opacity: 1;
    }
  }
`;
