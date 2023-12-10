import { upload } from '@testing-library/user-event/dist/upload';
import {useState} from 'react';
import axios from 'axios';

const apiURL = require('../config/apiURL').apiURL;

// 파일 선택해서 올리고 업로드 버튼 클릭 시 서버에 axios 요청
// 인터넷에서는 async, await 이런 거 쓰는 데 이거 문법 알아보기!


function ImageUpload() {
    const [uploadFile, setUploadFile] = useState(null);
    const [inputTitle, setInputTitle] = useState('');


    const onChangeImageUpload = (e) => {
      const { files } = e.target;
      const newUploadFile = files[0];
      const reader = new FileReader();

      if (newUploadFile) {
        reader.readAsDataURL(newUploadFile);
        setUploadFile(newUploadFile);
      }else{
        setUploadFile(null);
      }
    };

    // 이름을 입력 및 수정할 때마다 이벤트 발생
    const changeTitle = (newInput) => {
      setInputTitle(newInput);
    };

    // 업로드하기 버튼을 눌렀을 때
    const onClickUpload = () => {
      if (uploadFile == null) {
        alert('파일을 넣어주세요');
      }
      else if (inputTitle === '') {
        alert('이름을 입력해주세요');
      }else if (inputTitle.length > 5){
        alert('5글자 이하로 입력해주세요')
      }
      else{

        const formData = new FormData();
        formData.append('image', uploadFile); // 'image'는 서버에서 해당 파일을 받을 때 사용할 키 이름
        formData.append('title', inputTitle);
        formData.append('category', 'test');

        // axios를 사용하여 서버로 전송
        axios.post(apiURL + '/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
          .then(response => {
            console.log('Success:', response);
          })
          .catch(error => {
            console.error('Error:', error);
          });

      }
      
    };
  
    return (
    <>
      <div className='upload-file' >
        <input type="file" accept="image/jpg" onChange={onChangeImageUpload} />
        <button onClick={onClickUpload} >업로드하기</button>
      </div>
      <div className='upload-filedata'>
        사진 제목 <input onChange = { (e) => {
          let newInput = e.target.value;
          changeTitle(newInput);
        }} type='text'></input> 카테고리 <input type='text'></input>
      </div>
      {/* DB 연결 후 추후 개발 예정 */}
    </>
    );
}



export default ImageUpload;