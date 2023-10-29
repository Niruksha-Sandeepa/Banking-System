import React, { useState } from "react"
import NavBar from "../../components/NavBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import UserProfile from "./UserProfile"
import Footer from "../../components/Footer"



const Profile = () => {
  const [selectedAccount, setSelectedAccount] = useState("SavingAccount")

  return (
    <div>
    <NavBar/>
    <UserProfile/>
    <Footer/>
    </div>

  )
}

export default Profile
