import React from "react";
import Products from "./Products/products";
import Filters from "./Filters/filters";


function RentingSection(){
    var verticalLineStyle = {
        borderLeft: "0.5px solid #E0E1E4"
    }

    return (
        <div class="fluid-container">  
            <div className="row" style={{padding:"18px"}}>
                <div class="col-2">
                    <Filters />
                </div>
                <div class="col-10" style={verticalLineStyle}>
                    <Products />
                </div>
            </div>
        </div>
    )
}

export default RentingSection;