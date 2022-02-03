import React, { useEffect, useState, useRef } from "react";
import "./Claim.css";
import axios from 'axios';
import { abi, contract } from "../../src/Utilies/Contract";
import { loadAccountAddress } from "../Apis/Api";
import { InputGroup, FormControl, Button, Text } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Claim({ changeRouteMain }) {
  let [test, setTest] = useState([])
    let [isCheck, setIsCheck]=("")
    let [isPic,setIsPic] =useState(false)
   const myMint=async()=>{
    try {
      let add = await loadAccountAddress();
      if(add== "No Wallet"){
          setIsCheck("")
      }else{
      const web3 = window.web3;
      let contractOf= new web3.eth.Contract(abi,contract)
      let mintId = await contractOf.methods.getUserTokens(add).call();
      console.log("Mint Id",mintId.length)
      if(mintId.length >0){
        console.log("First if ");
        setIsPic(true)
      }

      console.log("Mint Id",isPic)

      let resArray = []
      let dummyAray = [...test];
      dummyAray.map((item) => {
        resArray.push(item)
    })

      for (let i=0; i<mintId.length; i++){
        await axios.get(`https://gateway.pinata.cloud/ipfs/QmP3CU9tcQGYbBYzzhWk8tc4fcQePHXKwJqYBMY3LZNBw7/${mintId[i]}.json`).then((res) => {
                  resArray.push(res.data);
              })
      }
      setTest(resArray);
      console.log("Mint Length is" ,resArray.length);
  }
  } catch (error) {
      console.log("Error while getting user's mints", error);
  }
}
// setInterval(() => {
//   myMint();
// }, 2000);
  useEffect(() => {
  myMint();
    
  }, []);
  return (
    <div  className={ isPic ? "claimmain" : "claimmainPic"} >
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="claimh2">Your Mints</h2>

          </div>
        </div>
        <div className="row clainrow1 ">
          <div className="col-md-12 claimbutton d-flex flex-wrap justify-content-center">
          {
                                        test?.map((items) => {
                                            return (
                                                <>
                                                    <div className="m-2 " >
                                                        <img className='cropeImage' src={items.image} alt="" />
                                                        {/* <span className='imageText'  >&nbsp;&nbsp;#{items.dna}</span> */}
                                                    </div>

                                                </>

                                            )
                                        })
                                    }
          
          </div>
        </div> 

      </div>
    </div>
  );
}

export default Claim;
