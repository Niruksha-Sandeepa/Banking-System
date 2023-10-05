import React from 'react'
import './RegisterPopup.css'
import {Link} from 'react-router-dom'
export default function RegisterPopup () {
	return (
		<div className='RegisterPopup_RegisterPopup'>
			{/* <Link to='/savingsaccount'> */}
				<div className='Rectangle7'/>
			{/* </Link> */}
			<div className='Rectangle6'/>
			<div className='Rectangle8'/>
			<div className='Rectangle9'/>
			<div className='Rectangle10'/>
			<div className='Rectangle11'/>
			<div className='Rectangle12'/>
			<div className='AccountNo'>
				<span className='NICNumber'>NIC Number:</span>
				<div className='Rectangle5'/>
			</div>
			<span className='EmailAddress'>Email Address:</span>
			<span className='FullName'>Full Name:</span>
			<span className='YearofBirth'>Year of Birth:</span>
			<div className='Rectangle13'/>
			<span className='Branch'>Branch:</span>
			<span className='AccountType'>Account Type:</span>
			<span className='Password'>Password:</span>
			<span className='ConfirmPassword'>Confirm Password:</span>
			{/* <Link to='/loginpopup'> */}
				<span className='AlreadyhaveanaccountLogin'>Already have an account? Login</span>
			{/* </Link> */}
			<span className='Register'>Register</span>
			<span className='Register_1'>Register</span>
		</div>
	)
}