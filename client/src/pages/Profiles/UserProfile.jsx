import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import YellowButton from "../../components/YellowButton"; // Make sure to import the YellowButton component

const UserProfile = () => {
  const accountType = "Adult";
  const userID = "123456789";
  const userName = "ABC";
  const userAge = "22";
  const userTelephone = "+234 123 456 789";
  const accountNo = "123456789";
  const accountBranch = "ABC";

  return (
    <Stack direction="row" spacing={20}>
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
              src="https://via.placeholder.com/150" // Placeholder image URL
              alt="User Icon"
            />
          </Box>
          <Box sx={{ padding: "10px 0px", borderRadius: "20px" }}>
            <YellowButton text="Logout" /> {/* Make sure YellowButton is correctly imported */}
          </Box>
        </Box>
      </Stack>
      
      <Stack spacing={0}>
        <Box textAlign="left" sx={{ padding: "20px 150px" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: 24,
              fontWeight: 700,
              padding: "0px 0px",
            }}
          >
            My Details
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
            ID: {userID}
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
            Name: {userName}
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
            Age: {userAge}
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
            Telephone No: {userTelephone}
          </Typography>
        </Box>
        <Box textAlign="left" sx={{ padding: "20px 150px" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: 24,
              fontWeight: 700,
              padding: "0px 0px",
            }}
          >
            Account Details
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
            Account No: {accountNo}
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
            Savings plan: {accountType}
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
            Branch: {accountBranch}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default UserProfile;
