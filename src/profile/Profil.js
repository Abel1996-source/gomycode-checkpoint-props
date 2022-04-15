import React from 'react';
import PropTypes from "prop-types";
function Profil(props) {
    
    return(
        <div>
            <span style={{border:"4px solid purple", borderRadius:"50%"}}>{props.children} </span>
            <button type="button" onClick={props.handleName} style={{padding:"10px", boxShadow:"0px 0px 5px rgba(0,0,0,0.9)",cursor:"pointer",border:"1px solid purple",borderRadius:"8px"}}>Click me</button>
            <h1>{props.fullName} </h1>
            <span style={{backgroundColor:"purple",padding:"15px",color:"#fff",fontSize:"1.1rem",borderRadius:"5px"}}>{props.bio} </span>
            <p>{props.profession} </p>
        </div>
    );
    
    
}
Profil.defaultProps={
    fullName:"KONAN KOUAKOU ABEL"
}
Profil.propTypes = {
    anyProp: PropTypes.any,
    booleanProp: PropTypes.bool,
    numberProp: PropTypes.number,
    stringProp: PropTypes.string,
    functionProp: PropTypes.func
   };
export default Profil;