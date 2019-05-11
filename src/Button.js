import React from 'react';


const Button = (props) =>
{

	var oneList = [];
	for(var i = props.start; i < props.end; i+=1)
		oneList.push({i});

	const allbuts = oneList.map((ind,val) =>
	{
		return <button key={ind.i} onClick = {() => {console.log(`${ind.i}`)}} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray" type="button">{ind.i}</button>
	});
	return(
		<div>
			{allbuts}
		</div>
		)
}

export default Button;