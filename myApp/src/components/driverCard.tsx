import { Avatar, Box, Button, SvgIcon, Typography } from "@mui/material";
import icon from "/Users/Hkr/Desktop/test project/myApp/src/assets/icon.svg";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { useState } from "react";
import { editDriverProps } from "./editDriver";

// interface drivercard {
//   name: string;
//   picture: string | null;
//   codeMeli: number;
//   phonenumber: string;
// }

const driverCard = (props: editDriverProps) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {isClicked && (
        <Box
          sx={{
            position: "fixed",
            display: "flex",
            gap: "4px",
            flexDirection: "column",
            width: "20%",
          }}
        >
          <Button
            sx={{
              display: "flex",
              position: "relative",
              gap: "4px",
              fontSize: "12px",
              width: "76px",
              height: "36px",
              bgcolor: "#FFDADA",
              color: "#E02222",
            }}
            variant="contained"
          >
            <SvgIcon sx={{ width: "16px", height: "16px", fill: "#E02222" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                Font Awesome Free 6.6.0 by @fontawesome -
                https://fontawesome.com License -
                https://fontawesome.com/license/free Copyright 2024 Fonticons,
                Inc.
                <path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
              </svg>
            </SvgIcon>
            <Typography>حذف</Typography>
          </Button>
          <Button
            sx={{
              width: "76px",
              height: "36px",
              bgcolor: "#D8D9FF",
              fill: "#6366F1",
              color: "#6366F1",
            }}
            variant="contained"
          >
            <SvgIcon>
              <DriveFileRenameOutlineIcon></DriveFileRenameOutlineIcon>
            </SvgIcon>
            <Typography>ویرایش</Typography>
          </Button>
        </Box>
      )}
      <Box
        onClick={() => {
          setIsClicked(!isClicked);
        }}
        sx={{
          height: "76px",
          width: "100%",
          bgcolor: "white",
          display: "flex",
          gap: 2,
          my: 2,
          borderRadius: "10px",
          p: "8px",
        }}
        className={`${isClicked ? "driver-card-click" : ""}`}
      >
        <Box
          sx={{ display: "flex", alignItems: "center" }}
          className="right-side"
        >
          <Avatar alt="Name" src={icon} />
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
              {props.birthdayDate}
            </Typography>
          </Box>
          <Box className="down">
            <Typography sx={{ color: "#777986", fontSize: "13px", mt: "8px" }}>
              کد ملی : {props.codemeli}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default driverCard;
