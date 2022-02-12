import React, { useState, useEffect } from "react";
import "./style.css";

function Menu({ items }) {
  const heart = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      fill="currentColor"
      className="bi bi-heart"
      viewBox="0 0 16 16"
    >
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
    </svg>
  );
  const star = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="yellow"
      className="bi bi-star-fill"
      viewBox="0 0 16 16"
      color="black"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );
  

  const [cart, setCart] = useState([]);
  const [cartTotal,setCartTotal] = useState(0);

    useEffect(() => {
      total();
    },[cart])

    const total =()=>{
      let totalAmount = 0;
      for (let i=0; i < cart.length;  i++){
          totalAmount +=parseFloat(cart[i].price*cart[i].noOfQty); 
      }
      setCartTotal(totalAmount);
    }

    const increase =(item)=>{
      let x = cart.map((i)=>{
        if(item.id === i.id){
          i.noOfQty+= 1
        }
        return i
      })
      setCart(x);
    }
    const decrease =(item)=>{
      let x= cart.map((i)=>{
        if(item.id === i.id && i.noOfQty>1){
            i.noOfQty -= 1
        }
        return i
      })
      setCart(x);
    }
  const addToCart = (item) => {
    let add = true;
    for(let i = 0; i < cart.length; i++){
      if(cart[i].id === item.id){
        add = false;
        console.log("opop");
      }
      }
      if(add)setCart([...cart, item]);
      console.log(cart);
  };

  const removeCart =(item) => {
    let hardCopy =[...cart]
      hardCopy = hardCopy.filter((cartitem) => cartitem.id !== item.id); 
    setCart(hardCopy);
  }

  const cartitem =  cart.map((item) => {
    const { id, price, img, quantity, title, noOfQty } = item;
    return (
      <div
        key={id}
        className="d-flex align-items-center justify-content-around rounded-pill mb-2 p-1"
        style={{boxShadow:'0 0 7px 1px #00000026;'}}
      >
        <img
          src={img}

          style={{ width: "2rem", height: "2rem",boxShadow:' -3px 5px 6px #00000075' }}
          className="imgset img-fluid "
          alt="...fotu"
        />
        
        <div
          className="d-flex  flex-column ml-2"
          style={{ width: "35%", fontSize: "14px", height: "40px"}}
        >
          <h6 className="m-0" style={{fontSize:'13px'}}>{title}</h6>
          <div
            // className="cBody justify-content-around my-0"
            style={{ fontSize: "11px" }}
          >
            <p className="text-muted  my-0" style={{ margin: "0px" }}>
              ({quantity}g)
            </p>
          </div>
        </div>
        <div className="changeQty d-flex align-items-center justify-content-between rounded-pill" style={{width:'17%', height:'15px', border: '1px solid lime'}}>
          <div className="minus" onClick={()=>{decrease(item)}} style={{cursor: 'pointer'}}>-</div>
          <div className="qty" style={{fontSize:'13px'}}>{noOfQty}</div>
          <div className="plus" onClick={()=>{increase(item)}} style={{cursor: 'pointer'}} >+</div>
        </div>
            <p className="card-text">${price}</p>
            
        <div onClick={()=>removeCart(item)} className="cross" style={{cursor: 'pointer'}}>
          X
        </div>
      </div>
    );
  })

 


  return (
    <>
      <div
        className="container d-flex justify-content-evenly flex-wrap"
        style={{ width: "55%" }}
      >
        {items.map((item) => {
          const { id, title, price, img, quantity, rating } = item;
          return (
            <div key={id}>
              <div className="cardset card align-items-center justify-content-center">
                <div className="badgearea">
                  <div className="rat">
                    {star}
                    {rating}
                  </div>
                  <div className="like" onClick={() => addToCart(item)}>
                    {heart}
                  </div>
                </div>
                <img src={img} className="imgset img-fluid " alt="...fotu" />
                <div
                  className="d-flex align-items-center flex-column"
                  style={{ width: "70%" }}
                >
                  <h6>{title}</h6>
                  <div className="cBody">
                    <p className="text-muted fs-6">({quantity}g)</p>
                    <p className="card-text">${price}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="container mx-2  "
        style={{ width: "20%" }}
      >
        <h4 className="text-center">My Order</h4>
        <div className="d-flex flex-column mt-6">
           {cartitem}

        </div>
        
        <hr />
       < div className="d-flex align-items-center justify-content-between" style={{fontWeight:"700"}}>
       <div>
          Total: 
        </div>
        <div>
        ${cartTotal}
        </div>
       </div>
        
      </div>
    </>
  );
}

export default Menu;
