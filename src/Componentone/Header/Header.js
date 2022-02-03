import React, { useEffect, useState } from "react";
import "./Header.css";
// import tato from "../../asset/tato.png";
import { Button } from "react-bootstrap";
import vector9 from "../../asset/Vector 9.png";
import { abi, contract ,tokenAddress,tokenAbi} from "../../Utilies/Contract";
import { loadAccountAddress } from "../../Apis/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Web3 from "web3";
// https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161
const webSupply= new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/")
function Header() {


  let [state, setState] = useState(1);
  let [cost, setCost] = useState(100);
  let [showAcc, setShowAcc] = useState("account");
  let [supply, setSupply] = useState(0);
  const increaseValue = () => {
    setState(++state);
    setCost(state * 100);
    
  };
  const decreaseValue = () => {
    if (state > 1) {
      let v = state - 1;
      setState(--state);
      setCost(state * 100);
    }
  };
  const mint = async () => {
    try {
      console.log("Clicked Mint");
      let add = await loadAccountAddress();
      if(add=="No Wallet"){
        toast.error("No Wallet")
      }else if(add ==  "Connect to Ethereum"){
        toast.error("Connect to Ethereum")

      }else{
        const web3 = window.web3;
        let contractAdd = new web3.eth.Contract(abi, contract);
        let tokencontractAdd = new web3.eth.Contract(tokenAbi, tokenAddress);
        let allowance = await tokencontractAdd.methods.allowance(add,contract).call();
        console.log("Allowance = ",allowance);
        let hardCode="100"
        if(allowance >= web3.utils.toWei(hardCode)){
          let hardCodedAmount ="100"
          await contractAdd.methods.mint(web3.utils.toWei(hardCodedAmount)).send({
            from: add,
            
          });
          // await contractAdd.methods.mint(state,web3.utils.toWei(cost.toString())).send({
          //   from: add,
            
          // });
          toast.success("✔️ your minting is success");

        }else{
          toast.error("Cost is greater than your approval amount")
        }
     
      }
 
    } catch (e) {
      toast.error("❌ your minting is rejected");
      console.log("error while minting", e);
    }
  };

  const approvetokens =async()=>{
    try{
      let add = await loadAccountAddress();
      if(add=="No Wallet"){
        toast.error("No Wallet")
      }else if(add ==  "Connect to Ethereum"){
        toast.error("Connect to Ethereum")

      }else{
        const web3 = window.web3;
        console.log("Cost",typeof(cost));
        console.log("Cost",contract);

        let contractAdd = new web3.eth.Contract(tokenAbi, tokenAddress);
        let hardCode ="100"
        await contractAdd.methods.approve(contract,web3.utils.toWei(hardCode)).send({
          from:add
        })
      } toast.success("Transaction Successful")
    }catch(e){
      toast.error("Failed Approving Amount")
      console.log("Error while approving",e);
    }
  }

  const chkSupply = async () => {
    try {
      let contractAdd = new webSupply.eth.Contract(abi, contract);
      let totalSupply = await contractAdd.methods.totalSupply().call();
      setSupply(totalSupply);
    } catch (e) {
      console.log("Error while fetch total supply", e);
    }
  };
   
  const getAccount = async () => {
    let add = await loadAccountAddress();
    if(add=="Not Wallet"){
    setShowAcc("Not Wallet");
    
  }else{ 
    let stringAcc = add?.substring(0, 6) + "..." + add?.substring(add?.length - 6);
      setShowAcc(stringAcc);
    }
  };

  setInterval(() => {
    chkSupply();
  }, 1000);
useEffect(() => {
  getAccount();
  chkSupply();
}, [])
  return (
    <div className="claimmain2">
      <div className="container ">
        <div className="row">
          <h2 className="headerh2">MINT NOW!</h2>
        </div>
        <div className="row headerbox">
          <div className="col-4 headerboxes">
            <h3 className="headerh3">SALE IS OPEN</h3>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                className="col-8 headerboxxxxx"
              >
                <h4 className="headerh44">Amount</h4>
                <div className="divvvv">
                  <button class="astext" onClick={decreaseValue}>
                    -
                  </button>
                  <span className="astex1">{state}</span>
                  <button class="astext" onClick={increaseValue}>
                    +
                  </button>
                </div>
              </div>
            </div>
            <img src={vector9} className="headerimage21121" />
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                className="col-8"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <h4 className="headerh444">Cost</h4>
                <span className="headerh444">
                  {cost} Token
                </span>
              </div>
            </div>
            <img
              src={vector9}
              className="headerimage21121"
            />
            <div>
              <p className="headerp">
                <span style={{ color: "#f6e42e" }}>Savage Minted:</span>
                 {supply}
                /2000
              </p>
              <p className="headerp">
                Connect your wallet to see
                <br />
                the accurate count
              </p>
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className=" gap-2 my-2">
                <button 
                  style={{ padding: "4px 45px" }}
                  className="btn navbarbtn"
                onClick={()=>approvetokens()}>

                  Approve
                </button>
              </div>
              <div className=" gap-2">
                <button
                  className="btn navbarbtn"
                  style={{ padding: "4px 57px" }}
                  onClick={mint}
                >
                  <b>MINT</b>
                </button>
              </div>
              <div className="col-7 headerbutton"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
