import React from 'react'
import './TotalTransactionReportPopup.css'
// import ImgAsset from '../public'
export default function TotalTransactionReportPopup () {
	return (
		<div className='TotalTransactionReportPopup_TotalTransactionReportPopup'>
			{/* <img className='Rectangle19' src = {ImgAsset.TotalTransactionReportPopup_Rectangle19} /> */}
			<span className='TotalTransactionReport'>Total Transaction Report</span>
			<span className='FromToAmountDateTime'>From                          To                    Amount                 Date           Time</span>
			<span className='_12344555432456664600120320221100'>12344555               432456664                $600                12/03/2022      11:00</span>
			<span className='_12452865434520123100100320221436'>12452865               434520123                 $100                10/03/2022      14.36</span>
			<span className='_145210364358741029400050320220753'>14521036               4358741029               $400                05/03/2022      07.53</span>
			<span className='_85758865432456664700120320221200'>85758865               432456664                $700                12/03/2022      12:00</span>
			<span className='_18858585893245666410220320220800'>188585858             932456664                $10                    22/03/2022     08:00</span>
			<span className='_1257803624566644586100220221100'>12578036               245666445                $86                   10/02/2022       11:00</span>
			<span className='_45263078452637894750020320220900'>45263078               452637894                $750                  02/03/2022     09:00</span>
			<span className='_123445554324566641000020320221100'>12344555               432456664                $1000               02/03/2022      11:00</span>
			<span className='_4523655543452780112010320221000'>45236555               434527801                 $12                    01/03/2022      10:00</span>
		</div>
	)
}