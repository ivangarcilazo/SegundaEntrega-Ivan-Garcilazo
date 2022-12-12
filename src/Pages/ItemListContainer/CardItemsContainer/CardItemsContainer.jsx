import { useEffect, useState } from "react"

import { NavLink } from "react-router-dom"

import CallCatalogue from "../../../Service/ApiCatalogue"
import Card from "./Card/Card"
import './CardItemsContainer.css'

import isEmpty from "../../../utils/isEmpty"

export default function CardItemsContainer(props){

    const[products, setProducts]=useState([])

    useEffect(()=>{
        CallCatalogue().then(product=>setProducts(product))
    },[])

    

    return(
        <div className="CardItemsContainer">
            {isEmpty(products)?(
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', background: 'white', display: 'block', shapeRendering: 'auto'}} width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx={50} cy={50} fill="none" stroke="#0a0a0a" strokeWidth={10} r={35} strokeDasharray="164.93361431346415 56.97787143782138">
                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
                </circle></svg>
            )
            :
            (
            <div className="ListItems">
                {products.map((product)=>{
                    return(
                        <Card key={product.id}>
                            <NavLink 
                                to={`/item/${product.id}`}
                                className="NavLinkCard"
                            >
                            
                            <div className="containerimg">
                                <img src={product.image} className="imageCard" alt="" />
                            </div>
                            <div className="containerInfoItemList">
                                <span className="titleItem">{product.name}</span>
                                <span className="priceItemCard">${product.price}</span>
                            </div>
                            </NavLink>
                         </Card>
                    )

                    })
                }
            </div>
            
            )}

        </div>
    )
}