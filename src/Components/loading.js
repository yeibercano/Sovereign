import React, {Component} from 'react';
import Load from 'react-loading';

const Loading = () => {
  return (
    <div className="centerContainer flexContainerRow loadingAnimation">
      <div>
        <Load type='spin' 
              color='white' 
              width="100%"
        />
        <h1 className="loadingTitle">Loading...</h1>  
      </div>
    </div>
  );
} 

export default Loading