import React from 'react'

const Card = ({name,studentclass,year}) => {
  return (
    <div>
        <div style={{border:'2px solid red',height:'380px',width:'380px',color:'blue',background:'orange'}}>
            <h5 style={{color:"green"}}> Student ID Card</h5>
            <div>
                <img src="https://www.bing.com/th/id/OIP.bm4I1naPcNyKuf9Bv59RzQHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2" alt="" height='100px' width='100px'/>
            </div>
            <div >
                <h3> {name} </h3>
               <p><strong>Course:</strong> {studentclass}</p>
               <p><strong>Year:</strong> {year}</p>
             <p><strong>ID:</strong> 2026CS101</p>
            </div>
        </div>

    </div>
  )
}

export default Card