import React from 'react'

const Button = (props) => {
  var bgColor='blue';
  let color='white';
if(props.bgColor){
  bgColor=props.bgColor
}
if(props.color){
  color=props.color
}
var divStyle={};
    switch(props.size){
        case 'lg':
            divStyle = {
                backgroundColor: bgColor, 
                color: color,
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                height:'3.3rem',
                width:'12rem',
                borderRadius:'18px',
                fontSize:'1.3rem',
                cursor:'pointer'
           }
           break;
        case 'md':
            divStyle = {
                backgroundColor: bgColor, 
                color: color,
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                height:'3rem',
                width:'9rem',
                borderRadius:'18px',
                fontSize:'1.1rem',
                cursor:'pointer'
           }
           break;

        default:
            divStyle = {
                backgroundColor: bgColor, 
                color: color,
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                height:'3rem',
                width:'6rem',
                borderRadius:'18px',
                fontSize:'1rem',
                cursor:'pointer'
           }
           

    }
  return (
    <div style={divStyle}>{props.btnTxt}</div>
  )
}

export default Button