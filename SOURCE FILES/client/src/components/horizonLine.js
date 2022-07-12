import React from 'react';
import '../fonts/fonts.css';

const horizonLine = ({text, lineColor = "black", backColor = "white"}) => {
    return(
        <div
            style={{
                fontFamily: "Noto Sans KR",
                fontSize: 38,
                margin: "auto",
                // width: "80%",
                // textAlign: "center",
                // borderTop: "2px solid black",
                // lineHeight: "1px",
                // margin: "80px auto"
                
                
            }}>
            <span style={{backgroundColor: backColor, padding: "0 20px"}}>{text}</span>
        </div>
    );
}

export default horizonLine;