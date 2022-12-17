import CallCatalogue from "../../../Service/ApiCatalogue"
import { useState, useEffect } from "react"
import isEmpty from "../../../utils/isEmpty"

export default function WomenPage(props){
    const {children}=props

    return(
        <div className="bodyCategory">
            {children}
        </div>
    )

}