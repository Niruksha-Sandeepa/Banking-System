import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import YellowButton from "../../components/YellowButton";


const EmployeeProfile = () => {
  const employeeID = "123456789";
  const employeerName = "ABC";
  const employeeAge = "22";
  const employeeTelephone = "+234 123 456 789";
  const Position = "Employee";
  const Branch = "Marine Province";

  return (
    <Stack direction="row" spacing={20}sx={{backgroundColor: "black"}}>
      <Stack spacing={0}>
        <Box textAlign="left" sx={{ padding: "20px 150px" }}>
          {/* Left Side */}
          <Typography
            sx={{
              color: "#FFCF43",
              fontSize: 24,
              fontWeight: 700,
              padding: "0px 0px",
            }}
          >
            My Profile
          </Typography>
        </Box>
        <Box>
          <Box>
            <img
              src="assets/profile.png"
              alt="User Icon"
              
            />
          </Box>
          <Box sx={{ padding: "10px 0px", borderRadius: "20px" }}>
            <YellowButton text="Logout" />
          </Box>
        </Box>
      </Stack>

      <Stack spacing={0}>
        <Box textAlign="left" sx={{ padding: "20px 150px" }}>
          {/* Left Side */}
          <Typography
            sx={{
              color: "white",
              fontSize: 24,
              fontWeight: 700,
              padding: "0px 0px",
            }}
          >
            Your Details
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 12,
              fontWeight: 400,
              padding: "10px 0px",
            }}
            fontFamily={"Inter"}
          >
            ID : {employeeID}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 12,
              fontWeight: 400,
              padding: "10px 0px",
            }}
            fontFamily={"Inter"}
          >
            Name : {employeerName}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 12,
              fontWeight: 400,
              padding: "10px 0px",
            }}
            fontFamily={"Inter"}
          >
            Age : {employeeAge}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 12,
              fontWeight: 400,
              padding: "10px 0px",
            }}
            fontFamily={"Inter"}
          >
            Telephone No: {employeeTelephone}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 12,
              fontWeight: 400,
              padding: "10px 0px",
            }}
            fontFamily={"Inter"}
          >
            Position : {Position}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 12,
              fontWeight: 400,
              padding: "10px 0px",
            }}
            fontFamily={"Inter"}
          >
            Branch : {Branch}
          </Typography>
        
        </Box>
        
      </Stack>
    </Stack>
  );
};

export default EmployeeProfile; // Export the UserProfile component