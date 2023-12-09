import './App.css';
import DisplayImage from './components/displayImage.js';
import ImageUpload from './components/upload.js';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      
      <div className='Navi'> <img onClick={ () => {axios.get('http://localhost:3001/upload').then((res) => {console.log(res.data)}).catch((error) => {console.log(error)}) } } className='main-logo' src='/logo.jpg'  />공주대학교 이미지 업로드 홈페이지</div>
      <ImageUpload />
      <DisplayImage />
    </div>
  );
}

export default App;
