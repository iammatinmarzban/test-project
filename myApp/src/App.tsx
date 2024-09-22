import "./App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Container, CssBaseline } from "@mui/material";
import DriverCard from "./components/driverCard";
import users from "./testUsers.json";
import { Link } from "react-router-dom";

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
          {users.map((i) => (
            <DriverCard
              name={i.name.firstName}
              codeMeli={i.socialSecurityNumber}
              phonenumber={i.phoneNumber}
              picture={i.pictureUrl}
            />
          ))}
        </Box>
      </Box>
      <Box sx={{ width: 1, display: "flex", justifyContent: "center" }}>
        <Button
          sx={{
            position: "fixed",
            bottom: "10px",
            width: "90%",
            height: "56px",
            bgcolor: "#6366F1",
            borderRadius: "16px",
            px: "26px",
            py: "16px",
          }}
          variant="contained"
          className="submit-button"
        >
          <Link to="/register-driver">افزودن راننده</Link>
        </Button>
      </Box>
    </Container>
  );
}

export default App;
