import axios from 'axios';

const EDAMAM_API_ID = 'your_api_id';
const EDAMAM_API_KEY = 'your_api_key';

export const fetchFoodName = async (upc) => {
  try {
    const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser`, {
      params: {
        upc: upc,
        app_id: EDAMAM_API_ID,
        app_key: EDAMAM_API_KEY
      }
    });
    if (response.data.hints.length > 0) {
      return response.data.hints[0].food.label;
    }
    return null;
  } catch (error) {
    console.error('Failed to fetch food data:', error);
    throw new Error('Failed to fetch food data');
  }
};
