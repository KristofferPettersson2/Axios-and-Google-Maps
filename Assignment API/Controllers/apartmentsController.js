apartmentsController = () => {
    get = async (req, res) => {
        try {
            const apartmentData = [
                {
                    "city": "Stockholm",
                    "description": "Lyx lägenhet",
                    "price": 2500,
                    "address": "Strandvägen 1, 114 51 Stockholm",
                    "bedrooms": 2,
                    "neighborhood": "Östermalm",
                },
                {
                    "city": "Stockholm",
                    "description": "Standard lägenhet",
                    "price": 500,
                    "address": "Tulegatan 6, 113 53 Stockholm",
                    "bedrooms": 1,
                    "neighborhood": "Sundbyberg",
                },
                {
                    "city": "Stockholm",
                    "description": "Standard lägenhet",
                    "price": 1000,
                    "address": "Karlbergsvägen 4, 113 27 Stockholm",
                    "bedrooms": 1,
                    "neighborhood": "Vasastan",
                },
                {
                    "city": "Göteborg",
                    "description": "Student lägenhet",
                    "price": 400,
                    "address": "Gibraltargatan 42, 412 58 Göteborg",
                    "bedrooms": 1,
                    "neighborhood": "Johanneberg",
                },
                {
                    "city": "Göteborg",
                    "description": "Student lägenhet",
                    "price": 500,
                    "address": "Seminariegatan 1, 413 13 Göteborg",
                    "bedrooms": 1,
                    "neighborhood": "Annedal",
                },
                {
                    "city": "Malmö",
                    "description": "Standard lägenhet",
                    "price": 500,
                    "address": "Calle Ljungbecks gata 40, 212 40 Malmö",
                    "bedrooms": 1,
                    "neighborhood": "Bulltofta",
                },
                {
                    "city": "Malmö",
                    "description": "Standard lägenhet",
                    "price": 500,
                    "address": "Östra Flädersgatan 10, 212 24 Malmö",
                    "bedrooms": 1,
                    "neighborhood": "Kriseberg",
                }
            ]
            
            return res.json(apartmentData);
        }
        catch (err) {
            return res.status(404);
        }
    };

    return { get };
}

module.exports = apartmentsController;