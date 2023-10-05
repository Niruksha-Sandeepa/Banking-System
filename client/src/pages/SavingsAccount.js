import React from 'react';
import './SavingsAccount.css';
import * as ImgAsset from '../public';
import { Link } from 'react-router-dom';

export default function SavingsAccount() {
  return (
    <div className='SavingsAccount'> {/* Updated class name */}
      {/* Navigation Bar */}
      <div className='NavigationBar'>
        <span className='ContactUs'>Contact Us</span>
        <span className='Promotions'>Promotions</span>
        <span className='DigitalBanking'>Digital Banking</span>
        <span className='AboutUs'>About Us</span>
        <span className='NexusTrustBank'>NexusTrust Bank</span>
      </div>

      {/* Quick Links */}
      <div className='QuickLinks'>
        <span className='AboutUs_1'>About Us</span>
        <span className='Dashboard'>Dashboard</span>
        <span className='Transaction'>Transaction</span>
        <span className='PlansandInterestRates'>Plans and Interest Rates</span> {/* Corrected class name */}
        <span className='DigitalBanking_1'>Digital Banking</span>
        <span className='Promotions_1'>Promotions</span>
        <span className='ContactUs_1'>Contact Us</span>
        <span className='QuickLinks_1'>Quick Links</span>
      </div>

      {/* Social Media */}
      <div className='SocialMedia'>
        <img className='image8' src={ImgAsset.SavingsAccount_image8} alt="Image 8" />
        <img className='image9' src={ImgAsset.SavingsAccount_image9} alt="Image 9" />
        <img className='image10' src={ImgAsset.SavingsAccount_image10} alt="Image 10" />
        <img className='image11' src={ImgAsset.SavingsAccount_image11} alt="Image 11" />
        <img className='image12' src={ImgAsset.SavingsAccount_image12} alt="Image 12" />
        <span className='ConnectUsWith'>Connect Us With</span>
      </div>

      {/* Reach Us */}
      <div className='ReachUs'>
        <span className='_248123456789'>+248 123 456 789</span>
        <span className='_123OceanAvenueCoralBaySeasideCityMarineProvinceZipCode56789'>
          123 Ocean Avenue, Coral Bay, Seaside City, Marine Province, Zip Code: 56789
        </span>
        <img className='image16' src={ImgAsset.ContactUsPopup_image13} alt="Image 16" />
        <span className='ReachUs_1'>Reach Us</span>
        <img className='image18' src={ImgAsset.ContactUsPopup_image15} alt="Image 18" />
        <span className='contactnexustrustcom'>contact@nexustrust.com</span>
        <img className='image17' src={ImgAsset.ContactUsPopup_image14} alt="Image 17" />
      </div>

      {/* Additional elements */}
      {/* ... (other elements) */}
      
      <div className='AccountNavigation'>
        {/* You can add content here if needed */}
        <span className='FixedDepositsLoans'>Fixed Deposits & Loans</span> {/* Corrected class name */}
        <span className='SavingsAccount_2'>Savings Account</span>
        <span className='CheckingAccount'>Checking Account</span>
      </div>
    </div>
  );
}
