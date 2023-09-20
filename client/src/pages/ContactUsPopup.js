import React from 'react'
import './ContactUsPopup.css'
import ImgAsset from '../public'
export default function ContactUsPopup () {
	return (
		<div className='ContactUsPopup_ContactUsPopup'>
			<span className='_248123456789'>+248 123 456 789</span>
			<span className='_123OceanAvenueCoralBaySeasideCityMarineProvinceZipCode56789'>123 Ocean Avenue,Coral Bay, Seaside City,Marine Province, Zip Code: 56789</span>
			<img className='image13' src = {ImgAsset.ContactUsPopup_image13} />
			<img className='image14' src = {ImgAsset.ContactUsPopup_image14} />
			<img className='image15' src = {ImgAsset.ContactUsPopup_image15} />
			<span className='contactnexustrustcom'>contact@nexustrust.com</span>
			<span className='ContactUs'>Contact Us</span>
			<div className='Rectangle26'/>
		</div>
	)
}