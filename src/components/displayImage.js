import '../App.css';

function DisplayImage(){

    return(
        <>
        {/* S3에서 불러온 사진 정렬해서 보여줌 */}
        <div className='display-img'>
            <img className='image' src='https://via.placeholder.com/100' /> 
            <img className='image' src='https://via.placeholder.com/100' /> 
            <img className='image' src='https://via.placeholder.com/100' /> 
        </div>
        <div className='display-img'>
            <img className='image' src='https://via.placeholder.com/100' /> 
            <img className='image' src='https://via.placeholder.com/100' /> 
            <img className='image' src='https://via.placeholder.com/100' /> 
        </div>
        <div className='display-img'>
            <img className='image' src='https://via.placeholder.com/100' /> 
            <img className='image' src='https://via.placeholder.com/100' /> 
            <img className='image' src='https://via.placeholder.com/100' /> 
        </div>    
        </>
    ); 
}

export default DisplayImage;

