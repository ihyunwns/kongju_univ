import { upload } from '@testing-library/user-event/dist/upload';
import {useState} from 'react';
import axios from 'axios';
import { useRef } from 'react';

const apiURL = require('../config/apiURL').apiURL;

// 파일 선택해서 올리고 업로드 버튼 클릭 시 서버에 axios 요청
// 인터넷에서는 async, await 이런 거 쓰는 데 이거 문법 알아보기!


function ImageUpload() {
    const fileInputRef = useRef(null);
    const [uploadFile, setUploadFile] = useState(null);
    const [inputTitle, setInputTitle] = useState('');
    const [inputCategory, setInputCategory] = useState('');

    const onChangeImageUpload = (e) => {
      const { files } = e.target;
      // 파일을 안올리고 취소 눌렀을 때 에러 방지
      if(files.length <= 0){
        return;
      }

      const newUploadFile = files[0];
      const fileType = newUploadFile.type;
      if(!fileType.includes('image') && !fileType.includes('jpg') && !fileType.includes('png')){
        alert('올바른 파일 형식이 아닙니다');
        // input태그 초기화
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        return;
      }
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
    // 카테고리 수정할 때마다 이벤트 발생
    const changeCategory = (newInput) => {
      setInputCategory(newInput);
    };

    // 업로드하기 버튼을 눌렀을 때
    const onClickUpload = async () => {
      if (uploadFile == null) {
        alert('파일을 넣어주세요');
      }
      else if (inputTitle === '') {
        alert('이름을 입력해주세요');
      }else if (inputTitle.length > 5){
        alert('5글자 이하로 입력해주세요')
      }else if(inputCategory == 'none'){
        alert('카테고리를 선택해주세요')
      }
      else{

        const formData = new FormData();
        formData.append('file', uploadFile); // 'image'는 서버에서 해당 파일을 받을 때 사용할 키 이름
        formData.append('title', inputTitle);
        formData.append('category', inputCategory);

        // axios를 사용하여 서버로 전송
        await axios.post(apiURL + '/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
          .then(response => {
            alert('업로드 성공');
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
    };
  
    return (
    <>
      <div className='upload-file' >
        <input type="file" ref={fileInputRef} accept=".png, .jpg" onChange={onChangeImageUpload} />
        <button onClick={onClickUpload} >업로드하기</button>
      </div>
      <div className='upload-filedata'>
        사진 제목 <input onChange = { (e) => {
          let newInput = e.target.value;
          changeTitle(newInput);
        }} type='text'></input> 
         카테고리 <select onChange={ (e) => {
          let newInput = e.target.value;
          changeCategory(newInput);
         }}>
         <option value="none">-- Select --</option>
          <option value="character">인물</option>
          <option value="nature">자연</option>
          <option value="object">사물</option>
        </select>
      </div>
      {/* DB 연결 후 추후 개발 예정 */}
    </>
    );
}



export default ImageUpload;