import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,600;1,200;1,300;1,400&family=Roboto:wght@300;400;500;700&display=swap");
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    height: 100%;
    width: 100%;
    overflow-x:hidden;
  }


  .inline_element{
  display:inline-flex;
  gap:5px;

    }


.form_control{
  width:100%;
}
.form_control input{
  border:1px solid rgba(0,0,0,0.2);
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  outline: none;
}

  ${[5, 10, 15, 20].map(
    (size) => css`
      ${["top", "right", "bottom", "left"].map(
        (dir) => css`
      .m${dir[0]}-${size}{
        margin-${dir}: ${size}px;
      }
    `
      )}
    `
  )}

${[5, 10, 15, 20].map(
  (size) => css`
    ${["top", "right", "bottom", "left"].map(
      (dir) => css`
      .p${dir[0]}-${size}{
        padding-${dir}: ${size}px;
      }
    `
    )}
  `
)};




`;

export default GlobalStyles;
