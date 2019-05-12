import React from 'react';

const OutputBox = (props) => 
{
	return(
		<div className="flex justify-between tc">
			<div className="outline w-30 pa1"> 
				<h1 className="dim fw1 courier tracked-tight">{props.what}</h1>
			</div>
			<div className="outline w-70 pa1"> 
				<h1 className="dim fw1 courier tracked-tight">{props.expr}</h1>
			</div>
		</div>

		)
}
export default OutputBox;