import { createTheme } from "@mui/material";

export const Colors = {
  primary: "#d8f3dc",
  secondary: "#572ca0",
  success: "#4caf50",
  info: "#00d5ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#22414d",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#c1c8e4",
  white: "#fff",
  black: "#000",
  shaft_opacity: "rgba(0, 0, 0, 0.7)",
  dark_footer: "#2c3333"
};

const overrides = { 
  palette: {},
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#572ca0',
          '&:hover': {
            background: "#572ca0",
            color: '#d8f3dc'
         },
        }
      }
    }
  }
};

const getNewPalette = (colors) => {
  for (const property in colors)
  overrides.palette[property] = { 'main': colors[property] };
}

getNewPalette(Colors);

const theme = createTheme(overrides);

export { overrides };
export default theme;