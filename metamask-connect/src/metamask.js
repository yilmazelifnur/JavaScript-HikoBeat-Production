import React, {useState} from 'react';
import { ethers  } from 'ethers';


const MetaMask = () => {
   
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaulAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  

  const connectWallet= () => {
    if(window.ethereum){
      window.ethereum.request({method:'eth_requestAccounts'})
      .then(result => {
        accountChanged([result[0]])
      })
    } else {
      setErrorMessage('Install MetaMask!')
    }
  }

  const accountChanged = (accountName) => {
    setDefaultAccount(accountName)
    getUserBalance(accountName)
  }
  
  const getUserBalance = (accountAddress) =>{
    window.ethereum.request({method:'eth_getBalance', params:[String(accountAddress) , "latest"]})
    .then(balance =>{
      setUserBalance(ethers.formatEther(balance));
    })
  }
  
  async function sendTransaction (e) {
    let params =[{
      from : "",
      to:e.target.to_address.value,
      gas:Number(21000).toString(16),
      gasPrice: Number(2500000).toString(16),
      value:Number(10000000000000000).toString(16)
    }]

    let result = await window.ethereum.request({method:"eth_sendTransaction", params}).catch((err)=>{
      console.log(err)
    })

  }

  return (

    <>
      <p>MetaMask Connection</p>
      <button onClick={connectWallet}>Connect Wallet Button</button>
      <h3>Address: {defaulAccount} </h3>
      <h3>Balance:  {userBalance} Eth </h3>
      
       <form onSubmit={sendTransaction}> 
       <h3>Enter Transaction Address:</h3>
       <input type="text" name="to_address" placeholder="Address:"/>
       <input type="submit" value="Submit"/>
       </form>

    
     {errorMessage}
    </>
  )
}

export default MetaMask;