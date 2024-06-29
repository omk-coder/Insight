

// Replace 'YOUR_API_KEY' with your actual NewsAPI key
const API_KEY = '0c5b731c3a874b8cb30809cb25e44955';
import axios from 'axios'

// app.get('/api/news', async (req, res) => {



export const fetchallNews = async(req, res) => {
    try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
        );
        res.json(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: 'Error fetching news' });
      }
}
