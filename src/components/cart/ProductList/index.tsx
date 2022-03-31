import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import ProductItem from "src/components/cart/ProductItem";
import { useParams } from "react-router-dom";
import API from "src/API";
import { addCart, ADD_ITEM } from "src/store/cart/action";
import axios from "axios";
import { Product } from "src/@types/types";

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
            {products.map((v, i) => <article key={i}>
                <p>아이디: {v.id}</p>
                <p>상품명: {v.title}</p>
                <p>설명: {v.description}</p>
                <p>{v.id}</p>
                </article>)
            }
               
            </div>
        </div>
    )
}