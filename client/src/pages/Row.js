import React from 'react'
import './Row.css'
import TypeDefault from "./TypeDefault"
export default function Row (props) {
	return (
		<div className={`Row_Row ${props.className}`}>
			<TypeDefault className='Cell'/>
			<TypeDefault className='Cell_1'/>
		</div>
	)
}