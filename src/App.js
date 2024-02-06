
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Menu from './Menu'
import Footer from './Footer'
import Home from './Home'
import Aboutus from './Aboutus'
import Cerificate from './Cerificate'
import Placement from './Placement'
import ContactUs from './ContactUs'
function App() {
  return (
   <>
 <BrowserRouter>
<Menu/>
 <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/aboutus" element={<Aboutus/>}/>
<Route path="/certificate" element={<Cerificate/>}/>
<Route path="/Placement" element={<Placement/>}/>
<Route path="/ContactUs" element={<ContactUs/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
   
   </>
  )
}

export default App




// import React from 'react'
// import Header from './Header'

// export default function App() {
//   return (
//     <div className='header'>
//       <Header />
//     </div>
//   )
// }






// ...................................................
// REACTAPP FOR INCREMENT AND DECREMENT

// import React, { Component } from 'react'
// import HelloName from './HelloName'

// export default className App extends Component {

//     state={
//       count : 0,
//       count1 : 100
//     }

//        show =()=>{
//         this.setState({count : this.state.count+1})
//        }

        

//         dec =()=>{
//           this.setState({count1 : this.state.count1-1})
//          }
    
       
    

//   render() {
//     return (
//       <>
//       <h1>{this.state.count}</h1>
//       {/* <h1>Updated value {this.state.count2}</h1> */}
//       <button onClick={this.show}>Increment</button>
//       <hr></hr>
//       <h1>{this.state.count1}</h1>
//       <button onClick={this.dec}>Decrement</button>
//       <hr></hr>
//       <HelloName Age={20}/>
//       </>
//     )
//   }
// }







// import React, { Component } from 'react'

// export default className App extends Component {
  
//   state={
//         count : 0
//       }
    
// show = ()=>{
//   this.setState({count :this.state.count+1})
// }

//   render() {
//     return (
//       <>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.show}>click Me To increment</button>
//       </>
//     )
//   }
// }






// ..................................................................
// import React, { Component } from 'react'

// export default className App extends Component {
//   constructor(){
//     super()
//     console.log("app constructor called");
//     this.state={
//       name : "amit"
//     }
//   }

//   static getDerivedStateFromProps(props,state)
//   {
//     console.log("getDerivedstatefromprops called");
//     console.log(props,state);
//     return null
//   }

//   componentDidMount()

//   {
//     console.log("componentDidMount called");
//   }

//   render() {
//     console.log("app render called");
//     return (
//       <>
//         <h1>Class called</h1>
//       </>
//     )
//   }
// }



// ........................................................
// import React,{useState,useEffect} from 'react'

// export default function App() {
//   let [data,setdata]= useState(1)
//   let [val,setval]= useState(100)

//   let fun1 =()=>{
//     setdata(data+1)
//   }

//   let fun2 =()=>{
//     setval(val-1)
//   }

//   useEffect(()=>{
//     console.log("use effect called");
//   },[val])

//   return (
//     <>
//       <h1> data : {data}</h1>
//       <button onClick={fun1}> Increment</button>
//       <hr></hr>
//       <h1> val : {val}</h1>
//       <button onClick={fun2}>Decrement</button>
//     </>
//   )
// }



// ...........................................................
// import React,{useState,useEffect} from 'react'

// export default function App() {
//   let [data,setdata]= useState(1)
//   let [val,setval]= useState(100)

//   let fun1 =()=>{
//     setdata(data+1)
//   }

//   let fun2 =()=>{
//     setval(val-1)
//   }
//   return (
//     <>
//       <h1> data : {data}</h1>
//       <button onClick={fun1}> Increment</button>
//       <hr></hr>
//       <h1> val : {val}</h1>
//       <button onClick={fun2}>Decrement</button>
//     </>
//   )
// }





// ...........................................
// import React,{useState} from 'react'

// export default function App(props) {
//   let[val,setval]=useState(props.Age)

//   let show=()=>{
//     setval(val+1)
//   }
//   return (
//     <>
//       <h1> age with props : {props.Age}</h1>
//       <h1>value with useState : {val}</h1>
//       <button onClick={show}>Click</button>
//     </>
//   )
// }




// import React,{useState} from 'react'

// export default function App() {
//   let[data,setdata]=useState('rahul')

//   let fun=()=>{
//     setdata('amit')
//   }

//   return (
//     <>
//       <h1>App Component</h1>
//       <h1>name : {data}</h1>
//       <button onClick={fun}>Click</button>
//     </>
//   )
// }




// ..................................................
// import React, { Component } from 'react'

// import User from './User'

// export default className App extends Component {
//   state={
//     Age:"20"
//   }
//   show=()=>{
//     this.setState({Age:this.state.Age+1})
//   }
//   render() {
//     return (
//       <>
//         <h1>This is app component</h1>
//         <button onClick={this.show}>Click me</button>
//         <hr></hr>
//         <User Age={this.props.Age}/>
        
//       </>
//     )
//   }
// }
