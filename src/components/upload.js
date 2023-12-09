import { upload } from '@testing-library/user-event/dist/upload';
import {useState} from 'react';

// 파일 선택해서 올리고 업로드 버튼 클릭 시 서버에 axios 요청
// 인터넷에서는 async, await 이런 거 쓰는 데 이거 문법 알아보기!

let uploadFile;

function ImageUpload() {
    const onChangeImageUpload = (e) => {
      const { files } = e.target;
      uploadFile = files[0];
      const reader = new FileReader();
  
      if (uploadFile) {
        reader.readAsDataURL(uploadFile);
      }
    };
  
    return (
    <>
      <div className='upload-file' >
        <input type="file" accept="image/*" onChange={onChangeImageUpload} />
        <button onClick={onClickUpload} >업로드하기</button>
      </div>
      <div className='upload-filedata'>
        사진 제목 <input type='text'></input> 카테고리 <input type='text'></input>
      </div>
      {/* DB 연결 후 추후 개발 예정 */}
    </>
    );
}

function onClickUpload(){
    if(!uploadFile){
        alert('파일을 넣어주세요');
    }
    console.log('api 제작');
}

export default ImageUpload;