export const base = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
  }

  img {
    display: block;
  }

  body {
    color: var(--text);
    background-color: var(--background);
    font-family: Inter, Roboto, Helvetica, -apple-system, ubuntu, 'Segoe UI', sans-serif;
    -webkit-font-smoothing: antialiased;
    padding-top: var(--space-xl);

    @media only screen and (min-width: 768px) {
      padding-top: unset;
      overflow-y: hidden;
    }
  }
`;
