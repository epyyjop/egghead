import React from 'react';

class App extends React.Component {
render(){
  return(
<button>React</button>
  )
}
}
//Stateless Component
const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component{
  render(){
    return <span>&hearts;</span>
  }
}

export default App
