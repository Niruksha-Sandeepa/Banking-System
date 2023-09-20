import React from 'react'
import './MyProfile.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function MyProfile () {
	return (
		<div className='MyProfile_MyProfile'>
			<div className='NavigationBar'>
				<span className='ContactUs'> Contact Us</span>
				<span className='Promotions'>Promotions</span>
				<span className='DigitalBanking'>Digital Banking</span>
				<span className='AboutUs'>About Us</span>
				<span className='NexusTrustBank'>NexusTrust Bank</span>
			</div>
			<div className='QuickLinks'>
				<span className='AboutUs_1'>About Us</span>
				<span className='Dashboard'>Dashboard</span>
				<span className='Transaction'>Transaction</span>
				<span className='PlansandInteresetRates'>Plans and Intereset Rates</span>
				<span className='DigitalBanking_1'>Digital Banking</span>
				<Link to='/promotionpopup'>
					<span className='Promotions_1'>Promotions</span>
				</Link>
				<Link to='/contactuspopup'>
					<span className='ContactUs_1'>Contact Us</span>
				</Link>
				<span className='QuickLinks_1'>Quick Links</span>
			</div>
			<div className='SocialMedia'>
				<img className='image8' src = {ImgAsset.SavingsAccount_image8} />
				<img className='image9' src = {ImgAsset.SavingsAccount_image9} />
				<img className='image10' src = {ImgAsset.SavingsAccount_image10} />
				<img className='image11' src = {ImgAsset.SavingsAccount_image11} />
				<img className='image12' src = {ImgAsset.SavingsAccount_image12} />
				<span className='ConnectUsWith'>Connect Us With</span>
			</div>
			<div className='ReachUs'>
				<span className='_248123456789'>+248 123 456 789</span>
				<span className='_123OceanAvenueCoralBaySeasideCityMarineProvinceZipCode56789'>123 Ocean Avenue,Coral Bay, Seaside City,Marine Province, Zip Code: 56789</span>
				<img className='image16' src = {ImgAsset.ContactUsPopup_image13} />
				<span className='ReachUs_1'>Reach Us</span>
				<img className='image18' src = {ImgAsset.ContactUsPopup_image15} />
				<span className='contactnexustrustcom'>contact@nexustrust.com</span>
				<img className='image17' src = {ImgAsset.ContactUsPopup_image14} />
			</div>
			<Link to='/homepage'>
				<img className='logout' src = {ImgAsset.SavingsAccount_logout} />
			</Link>
			<img className='ProfilePicture' src = {ImgAsset.SavingsAccount_ProfilePicture} />
			<span className='MyProfile_1'>My Profile</span>
			<img className='ProfilePicture_1' src = {ImgAsset.SavingsAccount_ProfilePicture} />
			<div className='YourDetails'>
				<span className='Name'>Name:</span>
				<span className='ID'>ID:</span>
				<span className='_123456789'>123456789</span>
				<span className='ABC'>ABC</span>
				<span className='_22'>22</span>
				<span className='_234123456789'>+234 123 456 789</span>
				<span className='YourDetails_1'>Your Details</span>
				<span className='Age'>Age:</span>
				<span className='TelephoneNo'>Telephone No:</span>
			</div>
			<div className='AccountDetails'>
				<span className='AccountNo'>Account No:</span>
				<span className='Adult'>Adult</span>
				<span className='MarineProvince'>Marine Province</span>
				<span className='MarineProvince_1'>Marine Province</span>
				<span className='_123456789_1'>123456789</span>
				<span className='AccountDetails_1'>Account Details:</span>
				<span className='SavingsPlan'>Savings Plan:</span>
				<span className='Branch'>Branch:</span>
				<span className='Branch_1'>Branch:</span>
			</div>
			<div className='Rectangle22'/>
			<Link to='/homepage'>
				<span className='Logout'>Logout</span>
			</Link>
			<div className='AccountNavigation'>
				<Link to='/fixeddepositsloans'>
					<span className='FixedDepositesLoans'>Fixed Deposites & Loans</span>
				</Link>
				<Link to='/savingsaccount'>
					<span className='SavingsAccount'>Savings Account</span>
				</Link>
				<Link to='/checkingaccount'>
					<span className='CheckingAccount'>Checking Account</span>
				</Link>
			</div>
		</div>
	)
}