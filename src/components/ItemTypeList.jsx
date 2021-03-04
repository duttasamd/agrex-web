import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ItemTypeList(props) {
    const [itemTypeList, setItemTypeList] = useState([]);
    const baseurl = process.env.REACT_APP_BASE_URL;

    useEffect(
        async () => 
        {
            // props.itemCategoryId &&
            let nalanda = await axios.get(`${baseurl}/itemtype?itemCategoryId=${props.itemCategoryId}`)
            // .then((res) => {
            //     setItemTypeList(res.data);
            // }).catch((err) => {
            //     console.log(err);
            // })
            // console.log(nalanda);
            setItemTypeList(nalanda.data);
        }, [props.itemCategoryId]
    );

    return(
        <ul>
            {
                itemTypeList.map((itemType) => {
                    return <li key={itemType.Id}>{itemType.Name}</li>
                })
            }
        </ul>
    );
}