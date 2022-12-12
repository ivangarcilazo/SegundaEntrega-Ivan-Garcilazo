import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

import getProductId from "../../utils/getProductId"

import CallCatalogue from "../../Service/ApiCatalogue"
import isEmpty from "../../utils/isEmpty"

import ItemDetails from "./ItemDetails/ItemDetails"

import './ItemDetailContainer.css'

export default function ItemDetailContainer(){
    const {id}=useParams()
    const[productDisplay, setProducts]=useState([])

    useEffect(()=>{
        CallCatalogue().then((productList)=>setProducts(productList))
    })

   return(
    <div className="bodyItemDetail">

        { isEmpty(productDisplay) ? (
            
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', background: 'white', display: 'block', shapeRendering: 'auto'}} width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx={50} cy={50} fill="none" stroke="#0a0a0a" strokeWidth={10} r={35} strokeDasharray="164.93361431346415 56.97787143782138">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
            </circle></svg>
            
        ):(
            productDisplay.map((productDef)=>{

                const product=getProductId(productDef, id)

                if(product!==undefined){

                    return(
                    <ItemDetails className="" key={product.id}>
                        <img className="imageDetailItem" src={product.image} alt="" />

                        <div className="containerDetailsTextItem">
                            <h3 className="titleDetailItem">{product.name}</h3>
                            
                            <div className="containerDetailsPrice">
                                <span className="priceItem">${product.price}</span>
                                <span className="shopItem">Free Shopping!</span>
                            </div>
                            
                            <div className="containerMoreDataItem">
                                <span>{product.presentationText}</span>
                            </div>
                            
                            <button className="buttonItem">Buy Now</button>
                        </div>
                    </ItemDetails>)
                }
                   
            })
        )
         
        }
    </div>
   )
}