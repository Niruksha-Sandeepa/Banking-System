import React from "react"
import { Box, Dialog, Typography } from "@mui/material"

const LoanRequestPopup = (props) => {
  const { onClose, open, name } = props

  const handleClose = () => {
    onClose(name)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        sx={{
          backgroundColor: "black",
          margin: 0.1,
          padding: 0, 
          boxShadow: "none", 
        }}
        alignItems={"center"}
        flex={"row"}
      >
        <Box padding={{ paddingTop: "20px" }}>
             <Typography
               sx={{
                 color: "white",
                 fontSize: 12,
                 fontWeight: 400,
                 padding: "0px 0px",
               }}
               fontFamily={"Inter"}
             >
              Request Loan
             </Typography>
             
           </Box> 
                
              
      </Box>
    </Dialog>
  )
}

export default LoanRequestPopup
