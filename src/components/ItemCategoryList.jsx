import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function ItemCategoryList(props) {
    const [itemCategories, setItemCategories] = useState([]);
    const baseurl = process.env.REACT_APP_BASE_URL;
    //const baseurl = "https://localhost:44357";

    useEffect(
        () => {
            axios.get(
                `${baseurl}/itemcategory`
            ).then((response) => {
                console.log(response.data);
                setItemCategories(response.data);
            }).catch(
                (err) => console.log(err)
            )
        }, []
    );
        
    return (

        <select onChange={e => {
            props.setItemCategory(e.target.value)}}>
            {
                itemCategories.map(
                    itemCategory => { 
                        return <option key={itemCategory.Id} value={itemCategory.Id}>{itemCategory.Name}</option>
                    }
                )
            }
        </select>
       
    )
}