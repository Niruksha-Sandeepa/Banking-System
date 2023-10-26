import React from 'react'
import './SuccessfulPopup.css'
import successful from './public/successful.png'
export default function SuccessfulPopup () {
	return (
		<div className='SuccessfulPopup_SuccessfulPopup'>
			<div className='Frame2'>
			</div>
			<span className='Successful'>Successful</span>
			<img className='icons8correct6411' src={successful} alt='Successful'/>
			<div className='Rectangle27'/>
		</div>
	)
}
