import React, { useState } from "react";
import {css , Theme} from "@emotion/react";
import Sidebar from "src/components/templates/sidebar";
import SidebarContent from "../sidebar/sidebar-content";

export default function Header(){

   // const [toggle, setToggle] = useState(false);

    return (
        <>
        <div css={Style.Container}>
            <div css={Style.InnerContainer}>
                <div css={Style.Logo}>SHOPPING CART</div> 
                { /*<div css={toggle ? [Style.Logo, Style.Logo_on] : Style.Logo }>LOGO</div>
                <button onClick={() => {
                    setToggle((prevState) => !prevState);
                }}>CHange</button> */}
            </div>           
        <Sidebar width={300} height={700}>
            <SidebarContent/>
        </Sidebar>
        </div> 
        
        </>
    )
} 

const Style = {
    Container: css`
        position: relative;
        width: 100%;
        text-align: center;
        background-color: #ffffff;
        height: 72px;
    `,
    InnerContainer: (theme: Theme) => css`
        max-width: 1024px;
        margin-left: auto;
        margin-right: auto;
        background-color: #080808;
        height: 100%;
        display: flex;
        color : white;
        padding : 20px;
        font-weight : 600;
        font-size : 20px;
        justify-content: center;
        align-items: center;
        ${theme.mobile}{
            justify-content: flex-start;
        }
    `,
    Logo: (theme: Theme) =>  css`
        display: flex;
        margin : 0 auto;
    `,

    List: css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: 1rem;
        
        & > li {
            margin: 0 1rem;
        }
    `,
}