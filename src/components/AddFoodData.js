import React, { useState } from 'react';
import './AddFoodData.css';

import { db, storage } from '../Firebase/FirebaseConfig';
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddFoodData = () => {
    const [foodName, setfoodName] = useState('')
    const [foodPrice, setfoodPrice] = useState('')
    const [foodImage, setfoodImage] = useState(null)
    const [foodCategory, setFoodCategory] = useState('')
    const [foodDescription, setfoodDescription] = useState('')
    const [restaurantName, setrestaurantName] = useState('')
    // const [restaurantAddress, setrestaurantAddress] = useState('')
    const [foodImageUrl, setfoodImageUrl] = useState('')
    const [foodType, setFoodType] = useState('')
    const [mealType, setMealType] = useState('')
    const [foodAddon, setFoodAddon] = useState('')
    const [foodAddonPrice, setFoodAddonPrice] = useState('')
    const [restaurantEmail, setRestaurantEmail] = useState('')
    
    const [restaurantAddressBuilding, setRestaurantAddressBuilding] = useState('')
    const [restaurantAddressStreet, setRestaurantAddressStreet] = useState('')
    const [restaurantAddressCity, setRestaurantAddressCity] = useState('')
    const [restaurantAddressPincode, setRestaurantAddressPincode] = useState('')
    const [restaurantPhone, setRestaurantPhone] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        if (foodImage == null) {
            alert('Please select an image')
            return
        }
        else{
            const imageRef = ref(storage, `FoodImages/${foodImage.name}`)
            uploadBytes(imageRef, foodImage)
            .then(()=> {
                alert("Image Uploaded succesfully")
                getDownloadURL(imageRef)
                .then((url) => {
                    // console.log(url)
                    // setfoodImageUrl(url)

                     const foodData = {
                         foodName,
                        foodPrice,
                        foodImageUrl: url,
                        foodCategory,
                        foodDescription,
                        restaurantName,
                        restaurantPhone,
                        foodType,
                        mealType,
                        foodAddon,
                        foodAddonPrice,
                        restaurantEmail,
                        restaurantAddressBuilding,
                        restaurantAddressStreet,
                        restaurantAddressCity,
                        restaurantAddressPincode
                        // restaurantAddress
                }

                try{
                    const docref = addDoc(collection(db, "FoodData"), foodData);
                    alert("Data added successfully ", docref.id);

                }
                catch(error){
                    alert("Error adding document: ", error);
                }
                })})
            .catch((error)=> {
                alert(error.message)
            })
        }
    }

  return (
    <div className='form-outer'>
        <h1> Add Food Data</h1>
        <form className='form-inner'>
            <label>Food Name</label>
            <input type='text' name='food_name' onChange={(e)=>{setfoodName(e.target.value)}} />
            <br/>
            <label> Food Description</label>
            <input type='text' name='food_description' onChange={(e)=>{setfoodDescription(e.target.value)}}/>
            <br/>
            <div className="form-row">
                <div className="form-col">
                    <label> Food Price</label>
                    <input type='number' name='food_price' onChange={(e)=>{setfoodPrice(e.target.value)}}/>
                </div>
                <div className="form-col">
                    <label>Food Type</label>
                    <select name="food_type" onChange={(e)=>{setFoodType(e.target.value)}}>
                        <option value="null">Select Food Type</option>
                        <option value="veg">Veg</option>
                        <option value="non-veg">Non-Veg</option>
                    </select>
                </div>
            </div>
            <br/>
            {/* <label> Food Category</label> */}
            {/* <input type='text' name='food_category' onChange={(e)=>{setfoodCategory(e.target.value)}}/> */}
            
            <div className="form-row">
                <div className="form-col">
                    <label>Food Category</label>
                    <select name="food_category" onChange={(e)=>{setFoodCategory(e.target.value)}}>
                        <option value="null">Select Food Category</option>
                        <option value="indian">Indian</option>
                        <option value="chinese">Chinese</option>
                        <option value="italian">Italian</option>
                        <option value="mexican">Mexican</option>
                        <option value="american">American</option>
                    </select>
                </div>
                <div className="form-col">
                    <label>Meal Type</label>
                    <select name="meal_type" onChange={(e)=>{setMealType(e.target.value)}}>
                        <option value="null">Select Meal Type</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                        <option value="liquid">Liquid</option>
                    </select>
                </div>
            </div>
            <br/>
            <div className="form-row">
                <div className="form-col">
                    <label>Add On Name</label>
                    <input type="text" name="food_addon" onChange={(e)=>{setFoodAddon(e.target.value)}}></input>
                </div>
                <div className="form-col">
                    <label>Add On Price</label>
                    <input type="text" name="food_addon_price" onChange={(e)=>{setFoodAddonPrice(e.target.value)}}></input>
                </div>
            </div>
            <br/>
            <label> Food Image</label>
            <input type='file' name='food_image' onChange={(e)=>{setfoodImage(e.target.files[0])}}/>
            <br/>
            <label> Restaurant Name</label>
            <input type='text' name='restaurant_name' onChange={(e)=>{setrestaurantName(e.target.value)}}/>
            <br/>
            <div className="form-row">
                <div className="form-col">
                    <label>Restaurant Building Number/Name</label>
                    <input type="text" name="restaurant_address_building" onChange={(e)=>{setRestaurantAddressBuilding(e.target.value)}}/>
                </div>
                <div className="form-col">
                    <label>Restaurant Street/Area Name</label>
                    <input type="text" name="restaurant_address_street" onChange={(e)=>{setRestaurantAddressStreet(e.target.value)}}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-col">
                    <label>Restaurant City</label>
                    <input type="text" name="restaurant_address_city" onChange={(e)=>{setRestaurantAddressCity(e.target.value)}}/>
                </div>
                <div className="form-col">
                    <label>Restaurant Pincode</label>
                    <input type="text" name="restaurant_address_pincode" onChange={(e)=>{setRestaurantAddressPincode(e.target.value)}}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-col">
                    <label>Restaurant Phone</label>
                    <input type="number" name="restaurant_phone" onChange={(e)=>{setRestaurantPhone(e.target.value)}}/>
                </div>
                <div className="form-col">
                    <label>Restaurant Email</label>
                    <input type="email" name="restaurant_email" onChange={(e)=>{setRestaurantEmail(e.target.value)}}/>
                </div>
            </div>
            <button onClick={handleSubmit}> Add Food</button>
        </form>
    </div>
  )
}

export default AddFoodData