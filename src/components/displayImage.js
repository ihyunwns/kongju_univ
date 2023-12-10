import '../App.css';
import imageData from '../config/imageURL.json'

function DisplayImage(){

    return(
        <>
        {/* S3에서 불러온 사진 정렬해서 보여줌 */}
        <div className="image-grid">
         {

         imageData.map((image, index) => (
            <div key={index} className="grid-item">
                <img className="image" src={image.url} alt={`Image ${index}`} />
                <div className='image-name'> {image.name} </div>
            </div>
            
         ))}

         </div>   
        </>
    ); 
}

export default DisplayImage;

