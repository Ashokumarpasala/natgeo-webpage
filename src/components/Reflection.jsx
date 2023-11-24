import React from 'react';

function Reflection() {
    return (

        <div className='card lh-base' style={{backgroundColor:"black", color:"white", fontSize:"70px"}}>
    <style>{`
        .imagesrefl{
        width:800px;
        tranform-origin: center;
        transform: perspective(600px) rotateY(20deg);
        -webkit-box-reflect: below 25px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.35));
    }
        .imagesrefl:hover{
        transform: perspective(600px) rotateY(0deg);
        transition:0.5s;
        opacity: 1;
        }

    `}</style>
    <div className='p-5 m-5'>

    <h1 className='fw-bold p-5' style={{fontSize:"200px"}}> <span className='' style={{color:"#efc41a"}}>NAT GEO</span> WILD LIFE</h1>
        <p className='w-50 p-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem est excepturi aut obcaecati 
        consequatur repudiandae? Ex totam br inventore soluta culpa. Aspernatur,
         nobis dolores, numquam illum amet ab pariatur, quibusdam non odio distinctio soluta
          quam repellendus unde! Sequi ad quo ex provident. Iure aliquid soluta pariatur eius perferendis iusto odio voluptatibus!</p>
          <p className='p-5'>quam repellendus unde! Sequi ad quo ex provident. Iure aliquid soluta pariatur eius perferendis iusto odio voluptatibus!</p>
     <button className='btn btn-warning m-5 p-3 fs-1 fw-bold' style={{width:"350px"}}>Read More</button>
    </div>
     <div className="d-flex ref justify-content-evenly align-items-center " style={{minHeight:"100vh"}}>
        <div><img className='imagesrefl rounded-5' style={{width:"1000px"}} src="https://www.globalanimallaw.org/images/hintergrund-bild.jpg?m=1592824391" alt="" /></div>
        <div><img className='imagesrefl rounded-5' style={{width:"1000px"}} src="https://www.careerpower.in/2020/tiger-1.jpg" alt="" /></div>
        <div><img className='imagesrefl rounded-5' style={{width:"1000px"}} src="https://cdn.mos.cms.futurecdn.net/uWFdBVuLcvWaj7y2p2rKnL-1200-80.jpg" alt="" /></div>
        <div><img className='imagesrefl rounded-5' style={{width:"1000px"}} src="https://as1.ftcdn.net/v2/jpg/02/05/25/26/1000_F_205252643_RX9gcymYgd7xIuBJxd7WyfqAHa2lWy3n.jpg" alt="" /></div>
     </div>
   </div>
  );
}

export default Reflection;
