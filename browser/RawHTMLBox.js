import React from 'react';

export default function ConvertedText ( {text}) {

	return (
		<div className = "textbox">
			<h3>Converted to HTML:</h3>
			<div className="html-box">
				{text.split("\n").map(paragraph => {
					return <div>{paragraph}</div> 
				})} 
			</div> 
		</div> 
	)
} 