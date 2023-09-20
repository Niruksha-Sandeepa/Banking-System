import React from 'react'
import './HomePage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function HomePage () {
	return (
		<div className='HomePage_HomePage'>
			<div className='NavigationBar'>
				<Link to='/registerpopup'>
					<span className='Register'> Register</span>
				</Link>
				<Link to='/loginpopup'>
					<span className='Login'>Login </span>
				</Link>
				<Link to='/contactuspopup'>
					<span className='ContactUs'> Contact Us</span>
				</Link>
				<Link to='/promotionpopup'>
					<span className='Promotions'>Promotions</span>
				</Link>
				<Link to='/loginpopup'>
					<span className='DigitalBanking'>Digital Banking</span>
				</Link>
				<Link to='/undefined'>
					<span className='AboutUs'>About Us</span>
				</Link>
				<span className='NexusTrustBank'>NexusTrust Bank</span>
			</div>
			<div className='ContentinHomepagePicture'>
				<img className='pexelspixabay1645271' src = {ImgAsset.HomePage_pexelspixabay1645271} />
				<span className='YourFinancialFutureStartsHere'>Your<br/>Financial Future<br/>Starts Here</span>
				<span className='YourFinancialFutureStartsHere_1'>Your<br/>Financial Future<br/>Starts Here</span>
				<span className='YourFinancialFutureStartsHere_2'>Your<br/>Financial Future<br/>Starts Here</span>
				<span className='YourFinancialFutureStartsHere_3'>Your<br/>Financial Future<br/>Starts Here</span>
				<span className='WelcometoNexusTrustBankwhereyourfinancialfuturestartsExploreourcomprehensiveservicesexpertguidanceandinnovativesolutionsforajourneytowardsfinancialprosperityandsecurity'>Welcome to NexusTrust Bank, where your financial future starts. Explore our comprehensive services, expert guidance, and innovative solutions for a journey towards financial prosperity and security.</span>
				<div className='RegisterButton'>
					<Link to='/registerpopup'>
						<div className='YellowColourCurvedRectangle'/>
					</Link>
					<span className='StartMyFinancialFuture'>Start My Financial Future</span>
				</div>
				<div className='LoginButton'>
					<Link to='/loginpopup'>
						<div className='WhiteColourCurvedRectangle'/>
					</Link>
					<span className='IAlreadyStarted'>I Already Started</span>
				</div>
			</div>
			<div className='Navigation4Rectangles'>
				<Link to='/loginpopup'>
					<div className='Rectangle1'/>
				</Link>
				<div className='Rectangle5'/>
				<Link to='/loginpopup'>
					<div className='Rectangle2'/>
				</Link>
				<Link to='/undefined'>
					<div className='Rectangle3'/>
				</Link>
				<Link to='/contactuspopup'>
					<div className='Rectangle4'/>
				</Link>
				<span className='ContactUs_1'>Contact Us</span>
				<img className='image3' src = {ImgAsset.HomePage_image3} />
				<img className='image4' src = {ImgAsset.HomePage_image4} />
				<img className='image5' src = {ImgAsset.HomePage_image5} />
				<img className='image6' src = {ImgAsset.HomePage_image6} />
			</div>
			<div className='AboutUs_1'>
				<img className='ACompleteGuidetoSellingDigitalProductsSuccessfully1' src = {ImgAsset.HomePage_ACompleteGuidetoSellingDigitalProductsSuccessfully1} />
				<span className='DiscoverunparalleledconveniencewithoursleekonlinebankingplatformSeamlesslymanageyourfinancesthroughanintuitiveinterfaceofferingswiftaccesstobalancestransfersbillpaymentsandmoreOurcuttingedgesecurityensuresyourdataremainsprotectedwhileinteractivetoolsassistinbudgetingandgoaltrackingExperiencethefutureofbankingatyourfingertipscompletewithattentivecustomersupportEmbraceefficientsecureanduserfriendlybankingonourwebsitetoday'>Discover unparalleled convenience with our sleek online banking platform. Seamlessly manage your finances through an intuitive interface, offering swift access to balances, transfers, bill payments, and more. Our cutting-edge security ensures your data remains protected, while interactive tools assist in budgeting and goal tracking. Experience the future of banking at your fingertips, complete with attentive customer support. Embrace efficient, secure, and user-friendly banking on our website today.</span>
				<span className='AboutUs_2'>About Us</span>
				<div className='Rectangle12'/>
				<span className='CultivatingProsperityOneAccountataTimeWhereYourFinancialJourneyBecomesOurSharedAdventure'>"Cultivating Prosperity, One Account at a Time,<br/>Where Your Financial Journey Becomes Our Shared Adventure."</span>
			</div>
			<span className='InterestRates'>Interest Rates</span>
			<span className='MaximizeYourSavingswithNexusTrustBanksHighInterestRates'>Maximize Your Savings <br/>with NexusTrust Bank's <br/>High-Interest Rates</span>
			<div className='Rectangle15'/>
			<div className='Rectangle16'/>
			<span className='Children12Teen11Adult1810Senior6013'>Children       - 12%<br/>Teen             - 11%<br/>Adult(18+)    - 10%<br/>Senior(60+)  - 13%</span>
			<span className='_6months131year143year15'>6 months - 13%<br/>1 year       - 14%<br/>3 year      - 15%</span>
			<span className='SavingsAccounts'>Savings Accounts</span>
			<span className='FixedDepositAccounts'>Fixed Deposit Accounts</span>
			<img className='_7ExamplesOfHowDigitalTransformationImpactedBusinessPerformance1' src = {ImgAsset.HomePage__7ExamplesOfHowDigitalTransformationImpactedBusinessPerformance1} />
			<span className='ExploreNexusTrustBanksdedicatedsectionforthehighestinterestrateswhereyoucandiscoverarangeofsavingsandinvestmentoptionsdesignedtohelpyourmoneygrowWhetheryouresavingforthefutureorplanningforamajorpurchaseourcompetitiveinterestrateswillhelpyoureachyourfinancialgoalsfasterLearnmoreaboutourofferingsandstartearningmorewithNexusTrustBanktoday'>Explore NexusTrust Bank's dedicated section for the highest interest rates, where you can discover a range of savings and investment options designed to help your money grow. Whether you're saving for the future or planning for a major purchase, our competitive interest rates will help you reach your financial goals faster. Learn more about our offerings and start earning more with NexusTrust Bank today.</span>
			<div className='QuickLinks'>
				<Link to='/undefined'>
					<span className='AboutUs_3'>About Us</span>
				</Link>
				<Link to='/loginpopup'>
					<span className='Dashboard'>Dashboard</span>
				</Link>
				<Link to='/loginpopup'>
					<span className='Transaction'>Transaction</span>
				</Link>
				<Link to='/undefined'>
					<span className='PlansandInteresetRates'>Plans and Intereset Rates</span>
				</Link>
				<Link to='/loginpopup'>
					<span className='DigitalBanking_1'>Digital Banking</span>
				</Link>
				<Link to='/promotionpopup'>
					<span className='Promotions_1'>Promotions</span>
				</Link>
				<Link to='/contactuspopup'>
					<span className='ContactUs_2'>Contact Us</span>
				</Link>
				<span className='QuickLinks_1'>Quick Links</span>
			</div>
			<Link to='/employeeloginpopup'>
				<span className='EmployeeLogin'>Employee Login</span>
			</Link>
			<Link to='/managerloginpopup'>
				<span className='ManagerLogin'>Manager Login</span>
			</Link>
			<div className='Group1'>
				<div className='SocialMedia'>
					<img className='image8' src = {ImgAsset.SavingsAccount_image8} />
					<img className='image9' src = {ImgAsset.SavingsAccount_image9} />
					<img className='image10' src = {ImgAsset.SavingsAccount_image10} />
					<img className='image11' src = {ImgAsset.SavingsAccount_image11} />
					<img className='image12' src = {ImgAsset.SavingsAccount_image12} />
					<span className='ConnectUsWith'>Connect Us With</span>
				</div>
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
			<span className='PlansandRates'>Plans and Rates</span>
			<span className='Transaction_1'>Transaction</span>
			<span className='Dashboard_1'>Dashboard</span>
		</div>
	)
}