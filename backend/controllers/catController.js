const axios = require('axios');
require('dotenv').config();
const apiToken = process.env.API_TOKEN;

const cat_all_breeds = (req, res) => {
    const config = {
        method: "get",
        url: 'https://api.thecatapi.com/v1/breeds',
        header: {
            "x-api-key": apiToken
        }
    }

    axios.request(config).then((response) => {
        res.status(200).json(response.data);
    }).catch(err => res.status(500).json(err));
}

const cat_one_breed = (req, res) => {
    const config = {
        method: "get",
        url: `https://api.thecatapi.com/v1/breeds/search?q=${req.query.name}`,
        header: {
            "x-api-key": apiToken
        }
    }

    axios.request(config).then((response) => {
        res.status(200).json(response.data);
    }).catch(err => res.status(500).json(err));
}

const cat_one_image = (req, res) => {
    const config = {
        method: "get",
        url: `https://api.thecatapi.com/v1/images/${req.params.id}`,
        header: {
            "x-api-key": apiToken
        }
    }

    axios.request(config).then((response) => {
        res.status(200).json(response.data);
    }).catch(err => res.status(500).json(err))
}

const top_ten_breeds = (req, res) => {
    const config = {
        method: "get",
        url: 'https://api.thecatapi.com/v1/breeds',
        header: {
            "x-api-key": apiToken
        }
    }

    axios.request(config).then((response) => {
        const Data = response.data;
        const breeds = ["Chartreux", "Ragdoll", "Exotic Shorthair", "Abyssinian", "Maine Coon", "Sphynx", "Devon Rex", "American Shorthair", "Scottish Fold", "British Shorthair"]
        // const bestBreeds = Data.filter(value => breeds.includes(value.name));
        const bestBreeds = breeds.map(value => Data.find(i => i.name === value))
        res.status(200).json(bestBreeds);
    }).catch(err => {
        res.status(500).json(err);
    })
}

const random_images_cats = (req, res) => {
    const config = {
        method: "get",
        url: "https://api.thecatapi.com/v1/breeds",
        header: {
            "x-api-key": apiToken
        }
    }

    axios.request(config).then((response) => {
        const Data = response.data;
        let arr = []
        for (i = 0; i < 4; i++) {
            let num = Math.floor(Math.random() * Data.length);
            let chosenArray = Data[num];
            let chosenArrayName = chosenArray.name;
            let chosenArrayImage = chosenArray.image.url;
            arr.push({name: chosenArrayName, imageUrl: chosenArrayImage})
        }
        res.status(200).json(arr);
    }).catch(err => {
        res.status(500).json(err);
    })
}

module.exports = {
    cat_all_breeds,
    cat_one_breed,
    cat_one_image,
    top_ten_breeds,
    random_images_cats
}