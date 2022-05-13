import React, { useState } from 'react';
import { mintToken } from '../Web3Client.js'

import { Row, Col } from 'react-bootstrap';

function GetPP() {
    
    const btnStyle = {border: "none", padding: "0", marginBottom: "30px"};

    const [minted, setMinted] = useState(false);
    const [transaction, newTransaction] = useState()

    const mint = () => {
        mintToken().then(tx => {
            console.log("tx: ", tx);
            newTransaction(tx);
            setMinted(true);
        }).catch(err => {
            console.log('PP Error: ', err);
        })
    }

    return (
    <div >
        
        <Row >
            <Col style={{marginTop: "100px", marginBotton: "0px"}} md={{span: 8, offset: 2}}>
          
          
          {/* <p>Minting is unavailable until the launch. Check back soon for the date announcement.</p> */}
          
        {!minted ? <span><p>You must have a Metamask wallet connected to your browser to mint an NFT.
            </p><p>This can take around 2 minutes to process after you send payment.</p>
            <p>Heads up - this button actually works if you go through all the steps. You can try it out for almost free, but don't worry.
                Just like any Metamask transaction, no transaction will take place until you sign in and accept it.
            </p>
            <button className="mint-btn" style={btnStyle} onClick={() => mint()}>Mint</button>
            </span> : <span><p>Token Minted Sucessfully to: {transaction.to}</p><p>Congratulations! You now own an NFT!</p>
            <p>Refresh the page to snag another you greedy Gus.</p></span>}
            </Col>
        </Row>
    </div>
        )
}

export default GetPP;