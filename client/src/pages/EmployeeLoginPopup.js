import React from 'react'
import './EmployeeLoginPopup.css'
import {Link} from 'react-router-dom'
export default function EmployeeLoginPopup () {
	return (
		<div className='EmployeeLoginPopup_EmployeeLoginPopup'>
			<Link to='/emplyeeprofile'>
				<div className='Rectangle7'/>
			</Link>
			<div className='Rectangle6'/>
			<div className='AccountNo'>
				<span className='EmployeeID'>Employee ID:</span>
				<div className='Rectangle5'/>
			</div>
			<span className='Password'>Password:</span>
			<span className='EmployeeLogin'>Employee Login</span>
			<span className='_4520'>-$45.20</span>
			<span className='Login'>Login</span>
		</div>
	)
}