import React from 'react';

export default ({accountBalance}) => {
  return (
    <div className='claim-details'>
      <p className='attention-stmt'>Success!</p>
      <p><span className='key-name'>Current Account Balance:</span> {accountBalance}</p>
    </div>
   )
}