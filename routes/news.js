const express = require('express');
const { getNews } = require('../services/news');
const { authMiddleware } = require('./auth');
const router = express.Router();


const initNews = () => {

  router.get('/', authMiddleware, async (req, res) => {
    const { compcde } = req.query;

    try {
      const news = await getNews(compcde);
      res.status(200).json({status: 'Success', code: 200, payload: news});
    } catch (err) {
      console.error(err);
      res.status(500).json({status: 'Error', code: 500, payload: err.message});
    }
  });

  router.get('/about', (req, res) => {
    res.send('About news');
  });

  return router;
}

module.exports = {
  initNews
}