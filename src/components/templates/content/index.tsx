import React, { useState } from "react";
import {css, Theme} from "@emotion/react";

export default function Contact() {
    
    return(
        <div css={Style.Container}>
        <div css={Style.InnerContainer}>
            사이드바
         <div>1</div>
         <div>2</div>
         <div>여기는 map으로 
         <br/>
         api에서 받아오는 
         <br/>
         데이터를 뿌려주는 곳</div>
        <div>합계</div>
        </div>
        </div>
    )
}

const Style = {
    Container : css`
    background-color: #ddd;
    `,
    InnerContainer : css`
        padding: 40px 20px;
        position: relative;
        width: 100%;
    `,
}