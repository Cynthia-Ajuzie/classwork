import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
     toggle: true 
  }
  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      <Welcome text="welcome to using props" toggle={this.state.toggle}
              //  props1="you can trust my services"
              //  props2="kudos"
            /> 
      </header> 
        
      <p className="App-intro">
        To get started, Edit <code>src/App.js</code> and save to reload.
      </p>
    {this.state.toggle &&
      <p>This should show and hide</p>
    }
      <button onClick={this.toggle}>show/hide</button>

    </div>
  );
  }
}
 
class Welcome extends Component{
  render() {
    const{ text, toggle } = this.props;
    console.log(toggle);
    return(
      <div>
        <h2 className="App-title">{text}</h2>
        <h2>CYNTHIA</h2>
        <MyFunction/>
        </div>
    )

  }

}


export default App;

const MyFunction = () => <p>Ajuzie</p>


// const myFunction = () => {
//  return(
//   <p>Chidera</p>
//  )
// }
// explicit return which involves return

// const myFunction2 = () => (
//   <p>Chidera</p>
// )

// const myFunction3 =() => <p>Chidera</p>

// both myFunction2&3 are implicit returns
