import React from 'react';
import Button from './Button'
import 'tachyons'
class App extends React.Component
{
  render()
  {
    var allButtons = [];
    for(var i = 1; i <= 7; i+=3)
    {

      allButtons.push(<Button start={i} end ={i+3}/>);
    }
    allButtons.push(<Button start={0} end ={1}/>)

    return (
    <div>
      <h1> Basic Calculator app </h1>
      {allButtons}
    </div>
    );  
  }
  
}

export default App;
