citiesController = () => {
    get = async (req, res) => {
        try {
            const cityData = [
                { "city": "Stockholm" },
                { "city": "Göteborg" },
                { "city": "Malmö" }
            ]
            
            return res.json(cityData);
        }
        catch (err) {
            return res.status(404);
        }
    };

    return { get };
}

module.exports = citiesController;