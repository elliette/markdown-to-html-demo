import React from 'react';


export default function RenderedHTMLBox ({text}) {

	function createMarkup() {
  	return {__html: text};
	}

	return (

		<div className = "textbox">
			<h3>Converted to HTML:</h3>
			<div className="html-box" dangerouslySetInnerHTML={createMarkup()} /> 
		</div> 
	)
} 