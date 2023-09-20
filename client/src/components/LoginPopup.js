import React from 'react'
import './LoginPopup.css'
import {Link} from 'react-router-dom'
export default function LoginPopup () {
	return (
		<div className='LoginPopup_LoginPopup'>
			<Link to='/savingsaccount'>
				<div className='Rectangle7'/>
			</Link>
			<div className='Rectangle6'/>
			<div className='AccountNo'>
				<span className='AccountNo_1'>Account No:</span>
				<div className='Rectangle5'/>
			</div>
			<span className='Password'>Password:</span>
			<span className='Login'>Login</span>
			<span className='Login_1'>Login</span>
			<Link to='/registerpopup'>
				<span className='DonthaveanaccountRegister'>Don’t have an account? Register</span>
			</Link>
		</div>
	)
}