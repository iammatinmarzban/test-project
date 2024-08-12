import { Avatar, Box, Typography } from "@mui/material";
import logo from "./icon.svg";

interface drivercard {
  name: string;
  picture: string | null;
  codeMeli: number;
  phonenumber: string;
}
const driverCard = (props: drivercard) => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        gap: 2,
        my: 2,
        borderRadius: "10px",
        p: "8px",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center" }}
        className="right-side"
      >
        <Avatar alt="Abas" src={logo} />
      </Box>
      <Box
        className="left-side"
        sx={{
          mx: 2,
          width: "80%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          className="up"
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <Typography
            sx={{ color: "#282A3A", fontWeight: "500", fontSize: "16px" }}
          >
            {props.name}
          </Typography>
          <Typography sx={{ color: "#777986", fontSize: "13px" }}>
            {props.phonenumber}
          </Typography>
        </Box>
        <Box className="down">
          <Typography sx={{ color: "#777986", fontSize: "13px" }}>
            کد ملی : {props.codeMeli}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default driverCard;
