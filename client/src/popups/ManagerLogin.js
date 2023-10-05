import React from 'react'
import './ManagerLoginPopup.css'
import {Link} from 'react-router-dom'
export default function ManagerLoginPopup () {
	return (
		<div className='ManagerLoginPopup_ManagerLoginPopup'>
			{/* <Link to='/branchmanager'> */}
				<div className='Rectangle7'/>
			{/* </Link> */}
			<div className='Rectangle6'/>
			<div className='AccountNo'>
				<span className='EmployeeID'>Employee ID:</span>
				<div className='Rectangle5'/>
			</div>
			<span className='Password'>Password:</span>
		    <span className='ManagerLogin'>Manager Login</span> 
			<span className='Login'>Login</span>
		</div>
	)
}