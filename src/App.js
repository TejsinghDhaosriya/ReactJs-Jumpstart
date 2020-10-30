import React from 'react';
// import ReactDom from 'react-dom';

/*


function App() {
  return (
    <div>
    <h1 className="App">
      Hello World -Welcome to react world</h1>
    <Header/>
    <Footer/>
    </div>
  );
}

function Header(){
  return(
    <h1>Header Part</h1>
  )
}

function Footer()
{
  return(
    <h1>Footer Part</h1>
  )
}
*/
// ReactDom.render(<App/>,document.getElementById('root'));
class App extends React.Component{

constructor(){
  super();
  this.state={
    count:0
  }
} 
btnClick(){
  this.setState({
    count:this.state.count+1
  })
} 
render(){
  return(
   <div>
   <h1>Hello</h1>
   <h1>Value is {this.state.count}</h1>
   <button onClick={this.btnClick.bind(this)}>Increase</button>

   </div>



  )  

}

}


export default App;
