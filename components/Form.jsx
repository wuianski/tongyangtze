import { useForm } from "formbold-react";
/* MUI */
import { Box, TextField, Button } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import {
  createTheme,
  ThemeProvider,
  useTheme,
  styled,
} from "@mui/material/styles";

/* Customizing MuiTextField */
const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#888888ff",
            "--TextField-brandBorderHoverColor": "#000",
            "--TextField-brandBorderFocusedColor": "#000",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
              border: "1px solid var(--TextField-brandBorderFocusedColor)",
            },
            borderRadius: 0,
            fontFamily: "apparat-light",
            color: "#000",
          },
          input: {
            [`&::placeholder`]: {
              color: "#888",
              opacity: 1,
            },
            // color: "#888",
            // opacity: 1,
          },
        },
      },
    },
  });

/* Customizing MuiButton */
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#222222ff"),
  backgroundColor: "#222222ff",
  "&:hover": {
    backgroundColor: "#222222ff",
  },
  borderRadius: 0,
  width: "25%",
}));

export default function Form() {
  /* Customizing MuiTextField */
  const outerTheme = useTheme();
  /* Using FormBold */
  const [state, handleSubmit] = useForm("3qpq1");
  /* Return if form submitted */
  if (state.succeeded) {
    return <div>Form submitted successfully</div>;
  }

  return (
    <>
      <Box mb={4} sx={{ color: "#222222ff" }}>
        <Box mt={1} sx={{ fontSize: 30, fontFamily: "baskerville-display-pt" }}>
          Contact us
        </Box>
        <Box sx={{ fontSize: 15, color: "#000" }}>
          Please fill this form in a decent manner.
        </Box>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ "& > :not(style)": { mb: 1 } }}
      >
        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField
            type="text"
            placeholder="First Name"
            id="first_name"
            name="First Name"
            sx={{ width: "calc(50% - 4px)" }}
            size="small"
            required
          />
          <TextField
            type="text"
            placeholder="Last Name"
            id="last_name"
            name="Last Name"
            sx={{ width: "calc(50% - 4px)", ml: "8px" }}
            size="small"
            required
          />
          <TextField
            type="text"
            placeholder="Company Name"
            id="campany_name"
            name="Company Name"
            fullWidth
            size="small"
            required
          />
          <TextField
            type="email"
            placeholder="Email"
            id="email"
            name="Email"
            fullWidth
            size="small"
            required
          />
          <TextField
            type="text"
            placeholder="Subject"
            id="subject"
            name="Subject"
            fullWidth
            size="small"
            required
          />
          <TextField
            multiline
            rows={6}
            placeholder="Message"
            id="message"
            name="Message"
            fullWidth
          />
        </ThemeProvider>
        <ColorButton type="submit">Submit</ColorButton>
        <div>{state.error && state.error.message}</div>
      </Box>
    </>
  );
}
