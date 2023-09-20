import React from 'react'
import './Table1.css'
import Row from "./Row"
export default function Table1 (props) {
	return (
		<div className={`Table1_Table1 ${props.className}`}>
			<div className='Table'>
				<Row className='Row'/>
				<Row className='Row_1'/>
				<Row className='Row_2'/>
			</div>
		</div>
	)
}