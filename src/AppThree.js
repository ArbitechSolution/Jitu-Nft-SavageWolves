import React,{useState} from 'react'
import Claim from './ComponentTwo/Claim'
import Header from './Componentone/Header/Header'
function AppThree({changeRouteMain}) {
    
const [isChangeRoute, setIsChangeRoute] = useState("token");
    return (
        <div className="AppThree" style={{ paddingTop: "90px" }}>
            
            <Claim 
            changeRouteMain={changeRouteMain}
            />
        </div>
    )
}

export default AppThree
