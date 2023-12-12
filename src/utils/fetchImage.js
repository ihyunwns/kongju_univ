import axios from 'axios';
const apiURL = require('../config/apiURL');

// select 변경 할떄마다 category 변경해야함 !
export async function fetchImageData(category) {
      try {
          const response = await axios.get(apiURL + '/getURL', {
            params: {category}
          });
          return response.data; 
        } catch (error) {         
          console.error('Error fetching image data:', error);
          throw error;
        }
    
}