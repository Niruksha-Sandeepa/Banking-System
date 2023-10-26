import React from "react"
import { Box, Dialog, Typography } from "@mui/material"

const PromotionPopup = (props) => {
  const { onClose, open,name } = props

  const handleClose = () => {
    onClose(name)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        sx={{
          backgroundColor: "black",// Set the background color to black
          margin: 0.1,
          padding: 0, 
          boxShadow: "none", // Remove the shadow
        }}
        alignItems={"center"}
        flex={"row"}
      >
        
        <Typography
                sx={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: 400,
                  padding: "50px 25px",
                }}
                fontFamily={"Inter"}
              >
                Stay Tuned for Exciting Promotions! Currently, there are no promotions available, but we're actively working on bringing you exciting offers. Check back soon for updates and enjoy added value with NexusTrust Bank!
              </Typography>
      </Box>
    </Dialog>
  )
}

export default PromotionPopup
