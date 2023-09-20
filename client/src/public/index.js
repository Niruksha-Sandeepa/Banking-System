
        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
        
	questionMark: require('./questionMark.png'),
	TotalTransactionReportPopup_Rectangle19: tryRequire('./TotalTransactionReportPopup_Rectangle19.png') || require('./questionMark.png'),
	LateLoanInstalementsPopup_Rectangle20: tryRequire('./LateLoanInstalementsPopup_Rectangle20.png') || require('./questionMark.png'),
	ContactUsPopup_image13: tryRequire('./ContactUsPopup_image13.png') || require('./questionMark.png'),
	SuccessfulPopup_icons8correct6411: tryRequire('./SuccessfulPopup_icons8correct6411.png') || require('./questionMark.png'),
	ContactUsPopup_image14: tryRequire('./ContactUsPopup_image14.png') || require('./questionMark.png'),
	UnsuccessfulPopupu_icons8cancel961: tryRequire('./UnsuccessfulPopupu_icons8cancel961.png') || require('./questionMark.png'),
	ContactUsPopup_image15: tryRequire('./ContactUsPopup_image15.png') || require('./questionMark.png'),
	HomePage_pexelspixabay1645271: tryRequire('./HomePage_pexelspixabay1645271.png') || require('./questionMark.png'),
	SavingsAccount_image8: tryRequire('./SavingsAccount_image8.png') || require('./questionMark.png'),
	SavingsAccount_image9: tryRequire('./SavingsAccount_image9.png') || require('./questionMark.png'),
	SavingsAccount_image10: tryRequire('./SavingsAccount_image10.png') || require('./questionMark.png'),
	SavingsAccount_image11: tryRequire('./SavingsAccount_image11.png') || require('./questionMark.png'),
	SavingsAccount_image12: tryRequire('./SavingsAccount_image12.png') || require('./questionMark.png'),
	HomePage_image3: tryRequire('./HomePage_image3.png') || require('./questionMark.png'),
	HomePage_image4: tryRequire('./HomePage_image4.png') || require('./questionMark.png'),
	HomePage_image5: tryRequire('./HomePage_image5.png') || require('./questionMark.png'),
	HomePage_image6: tryRequire('./HomePage_image6.png') || require('./questionMark.png'),
	SavingsAccount_logout: tryRequire('./SavingsAccount_logout.png') || require('./questionMark.png'),
	SavingsAccount_ProfilePicture: tryRequire('./SavingsAccount_ProfilePicture.png') || require('./questionMark.png'),
	CheckingAccount_Rectangle18: tryRequire('./CheckingAccount_Rectangle18.png') || require('./questionMark.png'),
	HomePage_ACompleteGuidetoSellingDigitalProductsSuccessfully1: tryRequire('./HomePage_ACompleteGuidetoSellingDigitalProductsSuccessfully1.png') || require('./questionMark.png'),
	FixedDepositsLoans_Rectangle19: tryRequire('./FixedDepositsLoans_Rectangle19.png') || require('./questionMark.png'),
	SavingsAccount_Rectangle21: tryRequire('./SavingsAccount_Rectangle21.png') || require('./questionMark.png'),
	FixedDepositsLoans_Rectangle20: tryRequire('./FixedDepositsLoans_Rectangle20.png') || require('./questionMark.png'),
	SavingsAccount_Rectangle19_1: tryRequire('./SavingsAccount_Rectangle19_1.png') || require('./questionMark.png'),
	FixedDepositsLoans_Rectangle21: tryRequire('./FixedDepositsLoans_Rectangle21.png') || require('./questionMark.png'),
	HomePage__7ExamplesOfHowDigitalTransformationImpactedBusinessPerformance1: tryRequire('./HomePage__7ExamplesOfHowDigitalTransformationImpactedBusinessPerformance1.png') || require('./questionMark.png'),
	SavingsAccount_Rectangle20_1: tryRequire('./SavingsAccount_Rectangle20_1.png') || require('./questionMark.png'),
	CheckingAccount_Rectangle19: tryRequire('./CheckingAccount_Rectangle19.png') || require('./questionMark.png'),
	SavingsAccount_Rectangle19_2: tryRequire('./SavingsAccount_Rectangle19_2.png') || require('./questionMark.png'),
	CheckingAccount_Rectangle21: tryRequire('./CheckingAccount_Rectangle21.png') || require('./questionMark.png'),
	EmplyeeProfile_Rectangle21: tryRequire('./EmplyeeProfile_Rectangle21.png') || require('./questionMark.png'),
	FixedDepositsLoans_Rectangle21_1: tryRequire('./FixedDepositsLoans_Rectangle21_1.png') || require('./questionMark.png'),
	BranchManager_Rectangle21: tryRequire('./BranchManager_Rectangle21.png') || require('./questionMark.png'),
}