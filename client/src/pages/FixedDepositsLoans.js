import React from 'react'
import './FixedDepositsLoans.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function FixedDepositsLoans () {
	return (
		<div className='FixedDepositsLoans_FixedDepositsLoans'>
			<div className='NavigationBar'>
				<span className='ContactUs'> Contact Us</span>
				<span className='Promotions'>Promotions</span>
				<span className='AboutUs'>About Us</span>
				<span className='NexusTrustBank'>NexusTrust Bank</span>
				<span className='DigitalBanking'>Digital Banking</span>
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
			<span className='Dashboard_1'>Dashboard</span>
			<div className='FixedDeposits'>
				<span className='FixedDeposits_1'>Fixed Deposits</span>
				<img className='Rectangle19' src = {ImgAsset.FixedDepositsLoans_Rectangle19} />
				<span className='_10July2023'>10 July 2023</span>
			</div>
			<div className='Loans'>
				<span className='Loans_1'>Loans</span>
				<img className='Rectangle20' src = {ImgAsset.FixedDepositsLoans_Rectangle20} />
				<span className='_10Months10'>10 Months      - 10% </span>
				<span className='_1000000'>$10,000.00</span>
				<span className='_12September2022'>12 September 2022</span>
			</div>
			<span className='LoanRequest'>Loan Request</span>
			<span className='FixedDeposit'>Fixed Deposit</span>
			<div className='Transaction_1'>
				<img className='Rectangle21' src = {ImgAsset.FixedDepositsLoans_Rectangle21} />
				<span className='AccountNumber'>Account Number:</span>
				<div className='Rectangle8'/>
				<span className='Amount'>Amount :</span>
				<span className='TimePeriodinmonths'>Time Period<br/>(in months) :</span>
				<div className='Rectangle19_1'/>
				<div className='Rectangle22'/>
				<Link to='/successfulpopup'>
					<div className='Rectangle20_1'/>
				</Link>
				<span className='Proceed'>Proceed</span>
			</div>
			<div className='Transaction_2'>
				<img className='Rectangle21_1' src = {ImgAsset.FixedDepositsLoans_Rectangle21_1} />
				<span className='Plan'>Plan:</span>
				<div className='Rectangle8_1'/>
				<span className='Amount_1'>Amount :</span>
				<div className='Rectangle19_2'/>
				<Link to='/successfulpopup'>
					<div className='Rectangle20_2'/>
				</Link>
				<span className='Proceed_1'>Proceed</span>
			</div>
			<div className='FixedDepositPlans'>
				<span className='FixedDepositsPlans'>Fixed Deposits Plans</span>
				<span className='PlanBasicFor6monthsatinterestof13PlanPremiumFor1yearatinterestof14PlanGoldFor3yearsatinterestof15'>Plan Basic      : For 6 months at interest of 13%<br/>Plan Premium: For 1 year at interest of 14%<br/>Plan Gold       : For 3 years at interest of 15%</span>
			</div>
			<span className='FixedDepositesLoans'>Fixed Deposites & Loans</span>
			<span className='_1year14'>1 year       - 14% </span>
			<span className='_6Months13'>6 Months       - 13% </span>
			<span className='_3000000'>$30,000.00</span>
			<span className='_500000'>$5000.00</span>
			<span className='_3March2022'>3 March 2022</span>
			<div className='AccountNavigation'>
				<span className='FixedDepositesLoans_1'>Fixed Deposites & Loans</span>
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