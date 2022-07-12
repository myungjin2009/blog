import React from "react";
import './headerMenu.css';
import '../../fonts/fonts.css';

const headerMenuGenerator = () => {
    const list = ["ABOUT ME","COEING","DIARY","ETC","CONTACT"];
    const answer = list.map((value,idx) => {
        return(<div key={idx} style={{fontFamily:"Noto Sans KR"}} className="menuBtn">{value}</div>);
    });
    return answer;
}

const headerMenu = (props) => {
    return(
        <div className="headerMenu">
            {headerMenuGenerator()}
        </div>
    );
}

export default headerMenu;