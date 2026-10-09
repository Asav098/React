import React, {useState} from "react";

function MyComponent(){

    const[name,setName] = useState("Guest");
    const [quantity,setQuantity] = useState(0);
    const [comment,setComment]= useState("");
    const [payment,setPay]= useState("");
    const [shipping,setShipping]= useState("");
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handlePaymentChange(event){
        setPay(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    return (
    <div>
        <input value={name} onChange={handleNameChange}></input>
        <p>Name: {name}</p>
        <input value={quantity} type= "Number" onChange={handleQuantityChange}></input>
        <p>Quantity: {quantity}</p>
        <textarea value={comment} onChange={handleCommentChange} placeholder="Delivery instructions pls" rows="5"></textarea>
        <p>Comment : {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">select an option</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment : {payment}</p>
        <label>
            Pick Up
            <input type="radio" value="Pick up"
            checked={shipping ==="Pick up" } onChange={handleShippingChange}>
            </input>
        </label>
        <label>
            Delivery
            <input type="radio" value="Delivery"
            checked={shipping ==="Delivery" } onChange={handleShippingChange}></input>
        </label>
        <p>Shipping : {shipping}</p>
    </div>);
}
export default MyComponent