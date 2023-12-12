import { useEffect, useState } from 'react';
import '../App.css';
import { fetchImageData } from '../utils/fetchImage';

export function DisplayImage(props){

    const [imageURL, setImageURL] = useState([]);
    
    const handleData = async () => {
        const array_url = await fetchImageData(props.selectCategory); 
        setImageURL(array_url);
    }

    // 렌더링 시, handleData 시행
    useEffect( () => {
        handleData();
    }, [ props.uploadState, props.selectCategory ]);

    return(
        <>
        {/* S3에서 불러온 사진 정렬해서 보여줌 */}
        <div className="image-grid">
         {

         imageURL.map((image, index) => (
            <div key={index} className="grid-item">
                <img className="image" src={image.url} alt={`Image ${index}`} />
                <div className='image-name'> {image.title} </div>
            </div>
            
         ))}

         </div>   
        </>
    ); 
}
