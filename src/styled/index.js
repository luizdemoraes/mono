import { createGlobalStyle } from "styled-components";

import { variables } from "./variables";
import { fonts } from "./fonts";
import { base } from "./base";

export default createGlobalStyle`
  ${variables}
  ${fonts}
  ${base}
`;
