import React, { useState } from 'react';

function ObjectFit() {
  const [objectFit, setObjectFit] = useState('cover');

  const handleChangeObjectFit = (fitValue) => {
    setObjectFit(fitValue);
  };

  return (
    <div className='p-5' style={{backgroundColor:"black"}}>
      <div className='d-flex justify-content-around m-5 p-5 '>
        <div className='w-75 ' style={{position:"relative", left:"20%"}}>
          <img
            className='rounded-5'
            style={{
              width: '50%',
              height: '1800px',
              objectFit: objectFit, 
              objectPosition: '50% 100%'
            }}
            src="https://static.vecteezy.com/system/resources/previews/030/030/277/large_2x/snake-hidden-predatorgraphy-grass-national-geographic-style-35mm-documentary-wallpaper-free-photo.jpg"
            alt=""
          />
        </div>
        <div className='rounded-5 w-25 p-5 m-5'>
          <p
            style={{cursor:"pointer"}}
            className='card p-5 fs-1 fw-bolder bg-warning'
            onClick={() => handleChangeObjectFit('fill')}
          >
            object fill
          </p>
          <p
            style={{cursor:"pointer"}}
            className='card p-5 fs-1 fw-bolder bg-warning'
            onClick={() => handleChangeObjectFit('cover')}
          >
            object cover
          </p>
          <p
            style={{cursor:"pointer"}}
            className='card p-5 fs-1 fw-bolder bg-warning'
            onClick={() => handleChangeObjectFit('contain')}
          >
            object contain
          </p>
          <p
            style={{cursor:"pointer"}}
            className='card p-5 fs-1 fw-bolder bg-warning'
            onClick={() => handleChangeObjectFit('none')}
          >
            object none
          </p>
        </div>
      </div>
    </div>
  );
}

export default ObjectFit;
