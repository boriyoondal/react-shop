import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import ProductItem from "src/components/cart/ProductItem";
import { useParams } from "react-router-dom";
import API from "src/API";
import { addCart, ADD_ITEM } from "src/store/cart/action";
import axios from "axios";
import { Product } from "src/@types/types";
import { GoPlus } from "react-icons/go";
import { css } from "@emotion/react";

export default function ProductList() {
    const store = useSelector((store : RootState) => store.cart);
    const dispatch = useDispatch();
    
    // state
    const [products, setProducts] = useState< {
        id: string;
        title: string;
        description: string;
        price: string;
        image: string;
    }[] | []>([]);

    useEffect(() => {
        /*
        (async () => {
            const response  = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(API)
                }, 300);
            })
            setProducts(response as any);
        })();
        */
        
        /*
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(API)
            }, 300);
        }).then((res) => {
            setProducts(res as any);
        })
        */

        // 서버로부터 API 받아오기 
        axios.get("http://localhost:9999/api").then((res) => {
            console.log(res);
            setProducts(res.data);
        })
        

        /*
        (async () => {
            const result = await axios.get("/items");
            setProducts(result.data);
        })()
        */

    }, [])
    
    return(
        <div>
            <div>
            <h2>상품 목록</h2>

            {products.map((v, i) => 
            <article key={i} css={Style.ItemBox}>
                <img
                src={v.image} style={{width:200, height:150}}/>
                <p>아이디: {v.id}</p>
                <p>상품명: {v.title}</p>
                <p>설명: {v.description}</p>
                <button onClick= {()=>dispatch(addCart(v))}> 장바구니 <GoPlus/> </button>
                
            </article>
            )}
               
            </div>
        </div>
        
    )

}

const Style = {
    ItemBox : css`
    padding : 1rem;
    margin : 2.2rem;
    float : left;
    text-align: center;
   `,
    
    InnerItemBox : css`
    margin-left : 4rem;
    `
}