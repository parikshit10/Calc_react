import React from 'react';
import Button from './Button'
import 'tachyons'
class App extends React.Component
{
  constructor()
  {
    super();
    this.state = 
    {
      exp: ''
    }
    this.handler = this.handler.bind(this)
  }

  handler = (changedVal) =>
  {
    this.setState({exp: this.state.exp+changedVal})
    console.log(this.state.exp)
  }
  render()
  {
    var allButtons = [];
    var lst = [];
    for(var i = 1; i <= 9; i+=1)
    {
      
      lst.push(i.toString())
      if(lst.length === 3)
      {
        allButtons.push(<Button handler={this.handler} items={lst}/>);
        lst = [];
      }
    }
    lst = ["0",".","="]
    allButtons.push(<Button handler={this.handler} items={lst}/>)

    return (
    <div>
      <h1> Basic Calculator app </h1>
      {allButtons}

    </div>
    );  
  }
  
}

export default App;
