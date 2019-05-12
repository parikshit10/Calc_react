import React from 'react';


const Button = (props) =>
{

	var oneList = props.items;
	var handleToUpdate = props.handler
	const allbuts = oneList.map((ind,val) =>
	{
		return <button key={ind} onClick = {() => {handleToUpdate(ind)}} className="f4 bw1 grow no-underline br-pill ph3 pv2 mb2 dib white bg-light-purple" type="button">{ind}</button>
	});

	return(
		<div className="tc">
			{allbuts}
		</div>
		)
}

export default Button;