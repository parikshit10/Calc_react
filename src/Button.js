import React from 'react';


const Button = (props) =>
{

	var oneList = props.items;
	var handleToUpdate = props.handler
	const allbuts = oneList.map((ind,val) =>
	{
		return <button key={ind} onClick = {() => {handleToUpdate(ind)}} onKeyDown ={(event) => {
			if(event.keyCode <= 57 && event.keyCode >= 48)
				handleToUpdate((event.keyCode-48).toString())
			if(event.keyCode === 8 || event.keyCode == 27)
				handleToUpdate("AC")
			if(event.keyCode === 189)
				handleToUpdate("-")
			if(event.keyCode === 187 || event.keyCode === 13)
				handleToUpdate("=")
			if(event.keyCode === 191)
				handleToUpdate("/")
		}} className="f3 bw1 grow no-underline br-pill ph3 pv2 mb2 dib white bg-light-purple" type="button">{ind}</button>
	});

	return(
		<div className="tc">
			{allbuts}
		</div>
		)
}

export default Button;