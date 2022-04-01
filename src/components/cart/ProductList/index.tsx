import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
//import API from "src/API";
import { addCart } from "src/store/cart/action";
import axios from "axios";
import { Product } from "src/@types/types";
import { GoPlus } from "react-icons/go";
import { css } from "@emotion/react";
import Pagination from "src/components/pagination";
import Post from "../Post/post";

export default function ProductList() {
    const store = useSelector((store : RootState) => store.cart);
    const dispatch = useDispatch();

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); // 현재페이지
    const [postsPerPage, setPostsPerPage] = useState(3); // 페이지 당 product 갯수

    // state
   

    useEffect(() => {
        
        // 서버로부터 데이터 가져오기 
        async function fetchData() {
        setLoading(true);
        const res = await axios.get("http://localhost:9999/api");
        setProducts(res.data);
        setLoading(false)     
        }
        fetchData();

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

        // // 서버로부터 API 받아오기 
        // axios.get("http://localhost:9999/api").then((res) => {
        //     console.log(res);
        //     setProducts(res.data);
        // })
        

        /*
        (async () => {
            const result = await axios.get("/items");
            setProducts(result.data);
        })()
        */

    }, [])
    
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = products.slice(indexOfFirst, indexOfLast)


    return(
        <div>
            <div>
            <h2 style={{textAlign : "center", marginTop:"2rem"}}>SHOES LIST</h2>

             {products.map((v, i) => 
            <article key={i} css={Style.ItemBox}>
                <div className="productBox" css={Style.InnerItemBox}>
                <img
                src={v.image} style={{width:200, height:200}}/>
                <p>{v.id}</p>
                <p>{v.title}</p>
                <p>{v.price}</p>
                <br/>
                <button onClick= {()=>dispatch(addCart(v))}> 장바구니 <GoPlus/> </button>
                </div>
            </article>
            )} 
           
            </div>
            
                
            <Pagination postsPerPage={postsPerPage} totalPosts={products.length} paginate={setCurrentPage}></Pagination>
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
    margin: 0 1.2rem;
    
    `
}