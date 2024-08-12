import "./App.css";

// import { Fragment } from "react/jsx-runtime";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button, Container, CssBaseline } from "@mui/material";
import DriverCard from "./components/driverCard";

const Drivers = [
  {
    name: "عباس احمد پور",
    codeMeli: 1276564301,
    phoneNumber: "09123556879",
  },
  {
    name: "عباس احمد پور",
    codeMeli: 1276564301,
    phoneNumber: "09123556879",
  },
  {
    name: "عباس احمد پور",
    codeMeli: 1276564301,
    phoneNumber: "09123556879",
  },
  {
    name: "عباس احمد پور",
    codeMeli: 1276564301,
    phoneNumber: "09123556879",
  },
];

// I don't know how to add custom fonts to it.
// I will add the fonts later ok?!

function App() {
  return (
    <Container
      sx={{
        fontFamily: "iransans",
        bgcolor: "#F9F9F9",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100dvh",
        width: 1,
      }}
      maxWidth={false}
    >
      <CssBaseline />
      <Box>
        <Typography sx={{ mt: "20px" }} variant="h6" fontSize={20}>
          لیست رانندگان
        </Typography>
        <Box>
          {Drivers.map((i) => (
            <DriverCard
              name={i.name}
              picture={""}
              codeMeli={i.codeMeli}
              phonenumber={i.phoneNumber}
            />
          ))}
        </Box>
      </Box>
      <Box sx={{ width: 1 }}>
        <Button
          sx={{
            position: "fixed",
            bottom: "20px",
            width: "90%",
            height: "56px",
            bgcolor: "#6366F1",
            borderRadius: "16px",
            px: "26px",
            py: "16px",
          }}
          variant="contained"
          className="sumbit-button"
        >
          <Typography
            variant="button"
            sx={{ fontSize: "16px", fontFamily: "iransans", fontWeight: "600" }}
          >
            افزودن راننده
          </Typography>
        </Button>
      </Box>
    </Container>
  );
}

export default App;
