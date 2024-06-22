import axios from 'axios';

const API_KEY = 'cb963b77743348429a2d4b12a6622463';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchNews = async (category = 'general') => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apiKey: API_KEY,
        category: category,
        country: 'us', // Adjust the country as needed
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return { articles: [] };
  }
};
