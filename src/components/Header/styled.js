import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.header).attrs(() => ({
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
}))`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: var(--space-xl);
  padding: 0 var(--space-sm);
  border-bottom: 1px solid var(--border);
  background-color: var(--background);
  box-shadow: 0 3px 5px 0 rgba(15, 15, 15, 0.05);

  @media only screen and (min-width: 768px) {
    position: relative;
    z-index: initial;
    height: var(--space-xxl);
    padding: 0 var(--space-md);
    box-shadow: unset;
  }
`;
