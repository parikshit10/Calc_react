import React from 'react';
import Button from './Button'
import 'tachyons'

import OutputBox from './OutputBox'
class App extends React.Component
{
  constructor()
  {
    super();
    this.state = 
    {
      exp: '',
      ans: ''
    }
    this.handler = this.handler.bind(this)
  }

  handler = (changedVal) =>
  {
    if(changedVal !== "=" && changedVal !== "AC")
      this.setState({exp: this.state.exp+changedVal})
    else if(changedVal === "=")
    {
      this.setState({ans: eval(this.state.exp)})
      this.setState({exp: eval(this.state.exp)})
    }
    else if(changedVal === "AC")
    {
      this.setState({exp: ''})
      this.setState({ans: ''})
    }
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
      <h1 class="dim tc fw2 i sans-serif ttc b--black-60 f1 lh-title tracked"> Basic Calculator app </h1>
      <OutputBox expr={this.state.exp} what="Expression" />
      <OutputBox expr={this.state.ans} what="Answer" />
      {allButtons}
    </div>
    );  
  }
  
}

export default App;
