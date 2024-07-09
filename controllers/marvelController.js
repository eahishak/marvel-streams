const fetch = require('node-fetch');
const apiKey = 'YOUR_MARVEL_API_KEY'; // Make sure to replace this with your actual Marvel API key
const apiUrl = 'https://gateway.marvel.com/v1/public';

const getHomeContent = async (req, res) => {
    try {
        const response = await fetch(`${apiUrl}/comics?apikey=${apiKey}`);
        const data = await response.json();
        res.json(data.data.results);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch home content', error });
    }
};

const getSeries = async (req, res) => {
    try {
        const response = await fetch(`${apiUrl}/series?apikey=${apiKey}`);
        const data = await response.json();
        res.json(data.data.results);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch series', error });
    }
};

const getMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await fetch(`${apiUrl}/comics/${id}?apikey=${apiKey}`);
        const data = await response.json();
        if (data.data.results.length === 0) {
            res.status(404).json({ message: 'Movie not found' });
        } else {
            res.json(data.data.results[0]);
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch movie', error });
    }
};

const searchContent = async (req, res) => {
    try {
        const { query } = req.query;
        const response = await fetch(`${apiUrl}/comics?titleStartsWith=${query}&apikey=${apiKey}`);
        const data = await response.json();
        res.json(data.data.results);
    } catch (error) {
        res.status(500).json({ message: 'Failed to search content', error });
    }
};

module.exports = { getHomeContent, getSeries, getMovie, searchContent };
