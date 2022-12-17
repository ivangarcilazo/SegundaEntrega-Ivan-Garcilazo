import { useEffect, useState } from "react"

import { NavLink, useParams } from "react-router-dom"

import CallCatalogue from "../../../Service/ApiCatalogue"
import Card from "./Card/Card"
import './CardItemsContainer.css'

import WomenPage from "../../Category/Women/Women-"
import ManPage from "../../Category/Man/Man"
import SalePage from "../../Category/Sale/Sale"

import saleVerification from "../../../utils/SaleVerification"
import isEmpty from "../../../utils/isEmpty"

export default function CardItemsContainer(props){
    
    const{id}=useParams()
    console.log(id)
    const[products, setProducts]=useState([])

    useEffect(()=>{
        CallCatalogue().then(product=>setProducts(product))
    },[])

    switch(id){

        case('women'):
            return(
            <WomenPage>
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
                        {
                            products.map((product)=>{
                            if(product.category.women==true){
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
                                            {saleVerification(product)}
                                        </div>
                                        </NavLink>
                                    </Card>
                                )
                            }
                                
            
                            })

                        }
                    </div>
                    
                    )}
    
                </div>
            </WomenPage>
            )
            break;
        case('man'):
            return(
                <ManPage>
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
                        {
                            products.map((product)=>{
                            if(product.category.man==true){
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
                                            {saleVerification(product)}
                                        </div>
                                        </NavLink>
                                    </Card>
                                )
                            }
                                
            
                            })

                        }
                    </div>
                    
                    )}
    
                </div>
                </ManPage>
            )
            break;
        case('sale'):
            return(
                <SalePage>
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
                        {
                            products.map((product)=>{
                            if(product.category.sale==true){
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
                                            {saleVerification(product)}
                                        </div>
                                        </NavLink>
                                    </Card>
                                )
                            }
                                
            
                            })

                        }
                    </div>
                    
                    )}
    
                </div>
                </SalePage>
            )
                        
        default:
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
                                    {saleVerification(product)}
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
        break;
    
    }

    
}