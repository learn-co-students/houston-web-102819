import React from 'react';

const Brush  = (props) =>{
   const container = {
        
        backgroundColor: "transparent",
        width: "0px",
        borderRadius: "15px"
   }

   const content = {
       
        boxSizing: "border-box",
        fontFamily: "sans-serif",
        justifyContent: "space-between",
        width: "100%",
        padding: "10px",
        borderRadius: "0 0 10px 5px",
       
    }

    
    //this would't allow me to update the drop down menu
    
     // for clear canvas, need to test on whether or not clear just current user all everyone's drawing
        return(
        <div style={container}>
           <div  style={content}>
            
              <BrushWidth minWidth={props.minWidth} handleChange={props.handleInputChange} checked = {props.checked} mode={props.mode}/>
                      
          </div>
        </div>
        )
    
  }


  const BrushWidth = (props) =>{
    const strokeControlStyle = {
     
      
    }

    const inputStyle = {
      display: "block"
    }
    //console.log(props.mode) // has to set a value property in the selection bar and get the value from parent state
    return (
      <div style={strokeControlStyle} >
            <label>
               Stroke Width
              <input style={inputStyle} name="minWidth" type="range"  
               value={props.minWidth} min="5" max="100"
               onChange={(e) => props.handleChange(e)}/>
            </label>
             <div>
            <select value={props.mode} onChange={(e) => props.handleChange(e)}> 
               <option value = "none">Choose Your Style</option>
               <option value = "shadow">Shadow</option>
               <option value = "random dots">Random Dots</option>
               <option value = "stars">Stars</option>
               <option value = "stars rainbow">Rainbow Stars</option>
            </select>
            </div>
      </div>
    )
  }

export default Brush

