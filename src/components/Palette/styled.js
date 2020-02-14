import styled from "styled-components";
import { motion } from "framer-motion";
import { readableColor } from "polished";

const motionListVariants = {
  hidden: {
    opacity: 0,
    x: -100,
    transition: {
      when: "afterChildren"
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08
    }
  }
};

export const Box = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: var(--space-sm);
  overflow: hidden;
  background-color: white;
  transition: 0.2s ease-in-out;

  @media only screen and (min-width: 768px) {
    padding: var(--space-md);
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
  margin-top: var(--space-xs);

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const MotionList = styled(motion.ul).attrs(props => ({
  initial: "hidden",
  animate: "visible",
  variants: motionListVariants
}))`
  margin-top: var(--space-sm);
  display: grid;
  grid-gap: 4px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, minmax(var(--space-lg), 1fr));
  height: 100%;
  background-color: white;
  list-style: none;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, minmax(var(--space-xl), 1fr));
  }
`;

export const MotionListItem = styled(motion.li).attrs(props => ({
  variants: motionListVariants
}))`
  width: 100%;
  height: 100%;
`;

export const Color = styled(motion.button).attrs(() => ({
  whileHover: {
    scale: 1.14,
    zIndex: 1,
    boxShadow: "0 3px 8px 0 rgba(15, 15, 15, .08)"
  },
  whileTap: {
    scale: 1.05
  }
}))`
  position: relative;
  display: block;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border: none;
  background-color: ${props => props.color};
`;

export const ColorLabel = styled.span`
  opacity: 0;
  display: none;
  visibility: hidden;

  @media only screen and (min-width: 768px) {
    opacity: 1;
    display: flex;
    visibility: visible;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: var(--space-xxs);
    bottom: var(--space-xxs);
    padding: 4px var(--space-xxs);
    color: ${readableColor("#ff4567", "#ddd", "#353535")};
    font-size: 12px;
    /* background-color: rgba(0, 0, 0, 0.2); */
  }
`;
