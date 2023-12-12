import React, { useEffect, useState } from 'react';
import ImageUpload from './upload';
import {DisplayImage} from './displayImage';

function Handle(){
    const [uploadState, setUploadState] = useState(false);
    const [selectCategory, changeCategory] = useState('all');
    
    const changeState = function(st) {
        setUploadState(st);
    }

    useEffect( () => {
        changeState(false);
    }, [uploadState]);

    return(
        <>
            <ImageUpload changeState = {changeState} changeCategory = {changeCategory}/>
            <DisplayImage uploadState = {uploadState} selectCategory = {selectCategory} />
        </>
    )
}

export default Handle;