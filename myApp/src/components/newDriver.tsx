import {
  Box,
  Container,
  Typography,
  Button,
  SvgIcon,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
} from "@mui/material";
import alt from "../assets/altforpic.png";
import cities from "../cities.json";
import { useState } from "react";

const newDriver = () => {
  const [newDriver, setNewDriver] = useState();
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
      <Box sx={{ m: "20px" }} className="overall-content-container">
        <Box className="navigation-text">
          <Typography
            sx={{
              color: "#9496A1",
              fontSize: "12px",
              textAlign: "right",
              mb: "20px",
            }}
          >
            لیست رانندگان/ ثبت راننده جدید
          </Typography>
        </Box>
        <Box
          sx={{
            mb: "40px",
            display: "flex",
            alignItems: "flex-end",
            gap: "20px",
          }}
          className="picutre-remove-add-show"
        >
          <Box>
            <img src={alt} alt="altpicnotload" />
          </Box>

          <Button
            sx={{
              bgcolor: "#D8D9FF",
              fill: "#6366F1 ",
              color: "#6366F1",
              width: "270px",
              height: "48px",
              borderRadius: "16px",
            }}
            className="upload-image"
          >
            <SvgIcon sx={{ width: "20px", height: "20px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                --!Font Awesome Free 6.6.0 by @fontawesome -
                https://fontawesome.com License -
                https://fontawesome.com/license/free Copyright 2024 Fonticons,
                Inc.
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
              </svg>
            </SvgIcon>
            <Typography sx={{ fontSize: "16px" }}>بارگذاری تصویر</Typography>
          </Button>
        </Box>
        <Box
          className="all-input-feilds"
          sx={{
            width: 1,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Box
            className="code-meli-input"
            sx={{ w: 1, display: "flex", gap: "8px", alignItems: "baseline" }}
          >
            <input placeholder="کدملی" />

            {/* <ThemeProvider theme={theme}>
              <TextField
                dir="rtl"
                placeholder="کدملی"
                sx={{
                  border: 0,
                  bgcolor: "white",
                  width: "267px",
                  height: "48px",
                  p: "12px 16px",
                  borderRadius: "16px",
                  borderWidth: 0,
                  borderColor: "white",
                }}
                required
              />
            </ThemeProvider> */}

            <Button
              sx={{
                bgcolor: "#6366F1",
                color: "white",
                width: "115px",
                height: "48px",
                borderRadius: "16px",
              }}
            >
              <Typography>استعلام</Typography>
            </Button>
          </Box>
          {/* <GlobalStyles
            styles={{
              input: { border: "none", widht: "390px", height: "48px" },
            }}
          />
          <input placeholder="تست" /> */}
          {/* <TextField dir="rtl" sx={{ width: 1 }} /> */}
          {/* <TextField dir="rtl" sx={{ width: 1 }} />
          <TextField dir="rtl" sx={{ width: 1 }} /> */}

          <input placeholder="نام" />
          <input placeholder="نام خانوادگی" />
          <input placeholder="تاریخ تولد" />

          <div className="">
            <input
              list="cities"
              type="search"
              placeholder="شهر محل سکونت شما"
            />
            <datalist id="cities">
              {cities.map((city) => (
                <option value={city.label}>{city.label}</option>
              ))}
            </datalist>
          </div>
          {/* <Autocomplete
            dir="rtl"
            disablePortal
            id="combo-box-demo"
            options={cities}
            sx={{
              width: 1,
              bgcolor: "white",
              borderRadius: "16px",
              border: "none",
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="شهر محل سکونت شما" />
            )}
          /> */}
          <Box className="gender-picker">
            <FormControl
              sx={{
                color: "#B3B5BD",
                bgcolor: "white",
                p: "12px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                borderRadius: "16px",
              }}
            >
              <FormLabel id="demo-radio-buttons-group-label">جنسیت</FormLabel>
              <RadioGroup
                dir="rtl"
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  sx={{ color: "#404252" }}
                  value="male"
                  control={<Radio />}
                  label="مرد"
                />
                <FormControlLabel
                  sx={{ color: "#404252" }}
                  value="female"
                  control={<Radio />}
                  label="زن"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box
            className="user-status"
            sx={{
              p: "12px 16px",
              bgcolor: "white",
              color: "#B3B5BD",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",

              borderRadius: "16px",
            }}
          >
            <Typography>وضعیت کاربر</Typography>
            <Switch defaultChecked />
          </Box>
        </Box>
        <Box sx={{ width: 1, display: "flex", justifyContent: "center" }}>
          <Button
            className="submit-button"
            sx={{
              position: "fixed",
              bottom: "10px",
              width: "90%",
              height: "56px",
              bgcolor: "#B3B5BD",
              borderRadius: "16px",
              px: "26px",
              py: "16px",
            }}
            variant="contained"
          >
            <Typography
              variant="button"
              sx={{
                fontSize: "16px",
                fontFamily: "iransans",
                fontWeight: "600",
              }}
            >
              ثبت
            </Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default newDriver;
