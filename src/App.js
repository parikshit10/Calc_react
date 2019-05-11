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
    if(changedVal !== "=" && changedVal !== "AC")
      this.setState({exp: this.state.exp+changedVal})
    else if(changedVal === "=")
      console.log(eval(this.state.exp))
    else if(changedVal === "AC")
      this.setState({exp: ''})
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
        allButtons.push(<Button handler={this.handler} items={lst} />);
        lst = [];
      }
    }
    lst = ["0",".","="]
    allButtons.push(<Button handler={this.handler} items={lst}/>)
    lst = ["+","-","/"]
    allButtons.push(<Button handler={this.handler} items={lst}/>)
    lst = ["*","%","AC"]
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
