import React from "react";

const Background = ():JSX.Element => {
    return(
        <div style={{position:'absolute', width: '100%' ,height: '100%'}}>
            <div style={{background: '#0E3F71', width: '100%', height: '46%'}} />
            <div style={{background: '#FBB50E', width: '100%', height: '0.5%'}} />
            <div style={{ background: '#DFEFF4', width: '100%', height: '53.5%'}} />
        </div>
    )
}
export default Background