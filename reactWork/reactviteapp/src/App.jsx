import React from 'react'
import Student from './Student';
import UseStudentState from './UseStudentState';
function App() {
  const h1=<h1>Hello World</h1>
  const mystyle={
    color:'red',
    backgroundColor:'yellow'
  }
  const studentData=[{
        college: "ABES ENGINEERING COLLEGE" ,
        name: " Priyanshu",
        pic: "{<img src='https://tse1.mm.bing.net/th?id=OIP.da9lBtFNfdFQwErbLcMQwAHaFW&pid=Api&P=0&h=180' height={100} width={100}></img>",
        branch:" CSE",
        section:"B",
        roll:"121"},
        { college: "ABES",
          name:"Rohit",
        branch:"CS-DS",
        section:"N",
        roll:"12"
        }
  ]
  return (
    <div>
      <h2>hello using state Hook</h2>
      <div>
        <UseStudentState />
      </div>
    </div>
    // <div style={{backgroundColor:'cyan'}}> 
    //   {h1}
    //   <div style={mystyle}> ABES Engineering College</div>
    //   <div style={{display:'flex',margin: '50px'}}>{
    //     studentData.map(
    //       (ele)=>{
    //         return <Student data={ele} />
    //       }
    //     )
    //     }
      /* <Student data={studentData}/> */
        /* <Student college="ABES Engineering College" 
        name="Prince"
        branch="CSE"
        section="B"
        roll="12"
         />

      <Student  
        name="Rahul"
        pic={<img src='https://tse1.mm.bing.net/th?id=OIP.da9lBtFNfdFQwErbLcMQwAHaFW&pid=Api&P=0&h=180' height={100} width={100}></img>}
        branch="CSE"
        section="C"
        roll="12"
         />
        
        <Student college="ABES Engineering College" 
        name="Rohit"
        branch="CS-DS"
        section="N"
        roll="12"
         /> */
    //   </div>
    // </div>
  )
}

export default App