import React, { useState } from "react";
import { useEffect } from "react";
import "./sidebar.css";
import { IoCartOutline } from "react-icons/io5"

type SideType = {
    width : number;
    height : number;
    children : any;
}

export default function Sidebar({width, height, children} : SideType) {
    const [xPosition, setX] = useState(-width);

    
    const toggleMenu = () => {
        if (xPosition < 0) { //sidebar가 음수인지 확인 = 숨겨져 있음
            setX(0);

        }else {
            setX(-width);

        }
    };

    useEffect(() => {setX(-width)
    },[]);
    
    return (

        <div 
        className="side-bar" 
        style={{
            transform: `translatex(${xPosition}px)`,
            width: width, 
            height: height
            }}
            >

            <div
            onClick={() => toggleMenu()}
            className="toggle-menu"
            style={{
                transform: `translate(${width}px, -10vh)`

            }}
            >
            <IoCartOutline className="icon" size="36"/>    
            </div>
            <div className="content">{children}</div>
        </div>
        
    )
}