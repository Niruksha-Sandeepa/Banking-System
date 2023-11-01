import * as React from "react"

import PropTypes from "prop-types"
import Dialog from "@mui/material/Dialog"
import Typography from "@mui/material/Typography"
import { Box, Grid } from "@mui/material"
import TextInput from "../components/TextInput"
import YellowButton from "../components/YellowButton"
import axios from "axios"
import api from "../apiConfig"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
import {useNavigate} from "react-router-dom"
import HideInput from "../components/HideInput"


  return (
    <Dialog onClose={handleClose} open={open}>
      <Box
        sx={{
          backgroundColor: "black", // Set the background color to black
          margin: 0.1, // Remove the default margin
          padding: 0, // Set the background color to black
          boxShadow: "none", // Remove the shadow
        }}
        alignItems={"center"}
        flex={"row"}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: 30,
            fontWeight: 600,
            padding: "0px 0px 20px 0px",
          }}
          fontFamily={"Inter"}
          align="center"
        >
          
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              sx={{
                
                color: "white",
                fontSize: 18,
                fontWeight: 400,
                padding: "20px 70px",
              }}
              fontFamily={"Inter"}
            >
              NIC Number:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              <TextInput onValueChange={handleNicChange} />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 400,
                padding: "20px 70px",
              }}
              fontFamily={"Inter"}
            >
              Password :
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              {/* <TextInput onValueChange={handlePasswordChange} isPassword ={true} /> */}
              <HideInput onValueChange={handlePasswordChange} />
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            padding: "20px",
            borderRadius: "20px",
            justifyContent: "center",
            justifyItems: "center",
            display: "flex",
          }}
        >
          <YellowButton text="Proceed" onClick={handleLogin} />
        </Box>
      </Box>
      
    </Dialog>
  )


