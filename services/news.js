const {models} = require('../database/database');
const https = require('https');

const environment = process.argv[2] || "dev";
const config = require(`../config/config.${environment}.json`);

const getNews = async (compcde) => {

  let news = await models.newsfile1.findAll({
    where: {
      active: 'ACTIVE'
    },
    raw: true
  });

  news = await Promise.all(news.map(async (news) => {
    // fetch the paragraph and the image of the news
    let newsfile2 = await models.newsfile2.findAll({
      where: {
        docnum: news.recid.toString()
      },
      raw: true
    });

    // fetch the image of the news
    // and then download the image and get its base64
    const newsfile2image = newsfile2.find((newsfile2) => newsfile2.input_type === 'image');
    if (newsfile2image) {
      const url = `https://${config.db.host}/onedb/ess/main/uploads/${compcde}/news/${newsfile2image.file_directory}`;
      const image = await downloadImage(url);

      if (image) {
        // get the file format of the image
        const fileFormat = url.split('.').pop();
        newsfile2image.image_base64 = `data:image/${fileFormat};base64,${image}`; 
      }
    }

    // update the newsfile2s with the image_base64
    newsfile2 = newsfile2.map((newsfile2) => {
      
      if (newsfile2.input_type === 'image') {
        return newsfile2image;
      }

      return newsfile2;
    });

    return {
      ...news,
      newsfile2s: newsfile2,
    }
  }));

  return news;
}

const downloadImage = async (url) => {
  return new Promise((resolve, reject) => {
    console.log(`Downloading image: ${url}`);

    https.get(url, {rejectUnauthorized: false}, (response) => {
      if (response.statusCode === 200) {
        const chunks = [];
        response.on('data', (chunk) => {
          chunks.push(chunk);
        });

        response.on('end', () => {
          const imageData = Buffer.concat(chunks);
          const base64Image = imageData.toString('base64'); // Convert to base64 for React Native
          resolve(base64Image);
        });
      } else {
        resolve(undefined);
      }
    })
    .on('error', (err) => {
      reject(err);
    });
  });
}

module.exports = {
  getNews
}