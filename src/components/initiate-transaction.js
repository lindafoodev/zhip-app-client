import React from 'react';

export default ({transactionAmount, transactionId}) => {
  let link = `https://zhip.netlify.com/transaction/claim/${transactionId}`
  return (
    <div className='new-transaction-details'>
      <p className='attention-stmt'>Success!</p>
      <p><span className='key-name'>IOU #</span> {transactionId}</p>
      <p><span className='key-name'>Amount</span> {transactionAmount}</p>
      <div className='direction'>
      <p>Provide this unique url to IOU recipient</p>
      <p className='decorate-link'>{link}</p>
      </div>
    </div>
   )
}