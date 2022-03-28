import React, { useState } from "react";
import {css , Theme} from "@emotion/react";
import Sidebar from "src/components/templates/sidebar";
import "../sidebar/sidebar.css"
import Contact from "../content";

export default function Header(){

    const [toggle, setToggle] = useState(false);

    return (
        <>
        <div css={Style.Container}>
            <div css={Style.InnerContainer}>
                <div css={Style.Logo}>LOGO</div> 
                { /*<div css={toggle ? [Style.Logo, Style.Logo_on] : Style.Logo }>LOGO</div>
                <button onClick={() => {
                    setToggle((prevState) => !prevState);
                }}>CHange</button> */}
            </div>           
        <Sidebar width={300} height={700}>
            <Contact/>
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
        background-color: #706969;
        height: 72px;
    `,
    InnerContainer: (theme: Theme) => css`
        max-width: 1024px;
        margin-left: auto;
        margin-right: auto;
        background-color: #eee;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        ${theme.mobile}{
            justify-content: flex-start ;
        }
    `,
    Logo: (theme: Theme) =>  css`
        display: flex;
        margin : 0 auto;
    `,

    Logo_on: css`
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