import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function ItemList() {
    // const itemCategories = ['Metal', 'Vegetables', 'Fruits'];
    const [itemCategories, setItemCategories] = useState([]);
    // const baseurl = process.env.APP_BASE_URL;
    const baseurl = "https://localhost:44357";

    useEffect(
        () => {
            axios.get(
                `${baseurl}/api/itemcategory/list`
            ).then((response) => {
                console.log(response.data);
            }).catch(
                (err) => console.log(err)
            )
        }, []
    );
        
    return (
        itemCategories.map(
            (itemCategory) => { 
                return <div>{itemCategory}</div>
            }
        )
    )
}