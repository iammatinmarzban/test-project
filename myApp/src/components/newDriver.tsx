import {
  Box,
  Container,
  Typography,
  Button,
  SvgIcon,
  Switch,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import alt from "../assets/pictures/altforpic.png";
import cities from "../json/cities.json";
// import { useState } from "react";
// import { DriverProps } from "./editDriver";
// import { useStore } from "./store";

const newDriver = () => {
  type FormFields = {
    codemeli: string;
    name: string;
    lastName: string;
    phoneNumber: string;
    city: string;
    isMale: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };
  // const addDriver = useStore((state) => state.addDriver);
  // const { drivers, addDriver, removeDriver, updateDriver };
  // I'm not familiar with the Typescript syntaxt used in the line below -- just copied -- I understand it but I don't know why it's working or how it's working --
  // const [inputs, setInput] = useState<DriverProps>({} as DriverProps);

  // const handleInputChange = (e: any) => {
  //   const { name, value } = e.target;
  //   setInput({ ...inputs, [name]: value });
  // console.log(isFormComplete);
  // };

  const isFormComplete = false;

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
        <form onSubmit={handleSubmit(onSubmit)}>
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
              <input
                {...register("codemeli", { required: true })}
                // value={inputs.codemeli}
                name="codemeli"
                placeholder="کدملی"
                // onChange={handleInputChange}
                minLength={10}
                maxLength={10}
              />

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
            <input
              {...register("name", { required: true })}
              name="name"
              // onChange={handleInputChange}
              placeholder="نام"
              required
              // value={inputs.name}
            />
            {errors.name && <p>please check the Name property</p>}
            <input
              {...register("lastName", { required: true })}
              // value={inputs.lastName}
              required
              name="lastName"
              // onChange={handleInputChange}
              placeholder="نام خانوادگی"
            />
            <input
              {...register("phoneNumber", { required: false })}
              // value={inputs.phoneNumber}
              name="phoneNumber"
              // onChange={handleInputChange}
              placeholder="شماره تلفن"
            />

            <div className="">
              <input
                {...register("city", { required: true })}
                // value={inputs.city}
                name="city"
                // onChange={handleInputChange}
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

            <Box
              sx={{
                color: "#B3B5BD",
                bgcolor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                borderRadius: "16px",
              }}
              className="gender-picker"
            >
              <Typography>جنسبت</Typography>
              <Box
                sx={{
                  display: "flex",
                }}
                className="control"
              >
                <Box sx={{ display: "flex" }}>
                  <input
                    {...register("isMale", { required: true })}
                    // value={"woman"}
                    type="radio"
                    name="gender-picker"
                    // onChange={handleInputChange}
                  />
                  <label className="radio">زن</label>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <input
                    {...register("isMale", { required: true })}
                    // value={"man"}
                    type="radio"
                    name="gender-picker"
                    // onChange={handleInputChange}
                  />
                  <label className="radio">مرد</label>
                </Box>
              </Box>
              {/* <Box
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
              </Box> */}
            </Box>
            <Box
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
              <Switch
                name="status"
                // onChange={handleInputChange}
                //  value={1}
              />
            </Box>
          </Box>
          <Box sx={{ width: 1, display: "flex", justifyContent: "center" }}>
            <button
              style={{
                border: "none",
                color: "white",
                fontFamily: "iransans",
                fontSize: "16px",
                fontWeight: "500",
                backgroundColor: isFormComplete ? "#6366F1" : "#B3B5BD",
                position: "fixed",
                bottom: "10px",
                width: "90%",
                height: "56px",
                borderRadius: "16px",
                paddingInline: "26px",
                paddingBlock: "16px",
              }}
              type="submit"
            >
              <span>ثبت</span>
            </button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default newDriver;
