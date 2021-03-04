import React, {useState} from 'react';
import ItemCategoryList from './ItemCategoryList';
import ItemTypeList from './ItemTypeList';

export default function ItemDash () {
    const [itemCategoryId, setItemCategoryId] = useState();

    return (
        <>
            <ItemCategoryList setItemCategory={setItemCategoryId}/>
            <ItemTypeList itemCategoryId={itemCategoryId}/>
        </>
    );
}