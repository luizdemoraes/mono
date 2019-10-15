import styled from "styled-components";
import { motion } from "framer-motion";

export const List = styled(motion.ul).attrs(() => ({
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
}))`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: 1fr;
  width: 100%;
  min-height: calc(100vh - 80px); /* 100vh - header height */
  background-color: var(--border);

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ListItem = styled.li`
  width: 100%;
  height: 100%;
`;
