import React from 'react'
import './CheckingAccount.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function CheckingAccount () {
	return (
		<div className='CheckingAccount_CheckingAccount'>
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
			<span className='CheckingAccount_1'>Checking Account</span>
			<div className='TransactionHistory'>
				<img className='Rectangle18' src = {ImgAsset.CheckingAccount_Rectangle18} />
				<span className='TransactionHistory_1'>Transaction History</span>
				<span className='_9520'>-$95.20</span>
				<span className='Transferringtoaacc40'>Transferring to a acc  **40 </span>
				<span className='_10August20230713'>10 August 2023    07.13</span>
				<span className='Transferringtoaacc15'>Transferring to a  acc  **15   </span>
				<span className='Transferfromacc48'>Transfer from  acc  **48 </span>
				<span className='_1September20231341'>1 September 2023   13:41</span>
				<span className='_20August20230825'>20 August 2023   08.25</span>
				<span className='_1023'>-$10.23</span>
				<span className='_4520'>-$45.20</span>
				<span className='_52036'>+$520.36</span>
				<span className='Transferringtoaacc89'>Transferring to a  acc  **89     </span>
				<span className='Transferfromacc45'>Transfer from  acc    **45    </span>
				<span className='_5September20231021'>5 September 2023   10:21</span>
				<span className='_5102'>+$51.02</span>
			</div>
			<span className='Dashboard_1'>Dashboard</span>
			<div className='Balance'>
				<span className='Balance_1'>Balance</span>
				<img className='Rectangle19' src = {ImgAsset.CheckingAccount_Rectangle19} />
				<span className='_50000'>$500.00</span>
			</div>
			<div className='Transaction_1'>
				<img className='Rectangle21' src = {ImgAsset.CheckingAccount_Rectangle21} />
				<span className='Transaction_2'>Transaction</span>
				<span className='ToAccount'>To Account :</span>
				<span className='Amount'>Amount :</span>
				<div className='Rectangle8'/>
				<div className='Rectangle19_1'/>
				<Link to='/successfulpopup'>
					<div className='Rectangle20'/>
				</Link>
				<span className='Proceed'>Proceed</span>
			</div>
			<span className='_4August20231423'>4 August 2023    14.23</span>
			<Link to='/homepage'>
				<img className='logout' src = {ImgAsset.SavingsAccount_logout} />
			</Link>
			<Link to='/myprofile'>
				<img className='ProfilePicture' src = {ImgAsset.SavingsAccount_ProfilePicture} />
			</Link>
			<div className='AccountNavigation'>
				<Link to='/fixeddepositsloans'>
					<span className='FixedDepositesLoans'>Fixed Deposites & Loans</span>
				</Link>
				<Link to='/savingsaccount'>
					<span className='SavingsAccount'>Savings Account</span>
				</Link>
				<span className='CheckingAccount_2'>Checking Account</span>
			</div>
		</div>
	)
}