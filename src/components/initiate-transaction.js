import React from 'react';
import {CLIENT_ORIGIN} from '../config';

import '../css/initiate-transaction.css';

export default ({transactionAmount, transactionId}) => {
  let link = `${CLIENT_ORIGIN}/transaction/receive/${transactionId}`
  return (
    <div className='new-transaction-details'>
      <p className='attention-stmt'>Success!</p>
      <p><span className='key-name'>IOU ID:</span> {transactionId}</p>
      <p><span className='key-name'>IOU Amount:</span> {transactionAmount}</p>
      <div className='info-container'>
      <p>Provide this unique url to IOU recipient</p>
      <p className='decorate-link'>{link}</p>
      </div>
    </div>
   )
}