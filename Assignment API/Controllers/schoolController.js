schoolController = () => {
    getTeachers = async (req, res) => {
        try {
            const teacherData = [
                {
                    "Id": 1,
                    "FirstName": "Lisa",
                    "LastName": "Smith",
                    "PrefixId": 3,
                    "Prefix": "Mrs."
                },
                {
                    "Id": 2,
                    "FirstName": "Piere",
                    "LastName": "Johnson",
                    "PrefixId": 2,
                    "Prefix": "Mr."
                },
                {
                    "Id": 3,
                    "FirstName": "Carl",
                    "LastName": "Black",
                    "PrefixId": 2,
                    "Prefix": "Mr."
                },
                {
                    "Id": 4,
                    "FirstName": "Dolores",
                    "LastName": "White",
                    "PrefixId": 3,
                    "Prefix": "Mrs."
                }
            ]
            
            return res.json(teacherData);
        }
        catch (err) {
            return res.status(404);
        }
    };

    getCourses = async (req, res) => {
        try {
            const courseData = [
                {
                    "Id": 1,
                    "Title": "Donec ut turpis",
                    "Price": 99.99,
                    "TeacherId": 1,
                    "MinAge": 3,
                    "MaxAge": 7,
                    "Description": "Dolor sit amet, consectetur adipiscing elit.",
                    "Time": "09:00",
                    "Date": "2020-09-22T00:00:00.000Z",
                    "Teacher": "Mrs. Smith"
                },
                {
                    "Id": 2,
                    "Title": "Aliquam lacinia nunc a bibendu",
                    "Price": 19.99,
                    "TeacherId": 2,
                    "MinAge": 4,
                    "MaxAge": 8,
                    "Description": "sus orci augue eget leo. Praesent non ex sollicitudin, aliquam lectus sed, gravida magna. Aliquam lacinia nunc a bibendum volutpat. Curabitur nec soda",
                    "Time": "09:00",
                    "Date": "2020-09-22T00:00:00.000Z",
                    "Teacher": "Mr. Johnson"
                },
                {
                    "Id": 3,
                    "Title": "Nullam eleifend lectus mauris",
                    "Price": 59.99,
                    "TeacherId": 3,
                    "MinAge": 5,
                    "MaxAge": 9,
                    "Description": "Donec mollis, libero et porttitor finibus, nunc elit hendrerit dui, quis cursus orci augue eget leo. Praesent non ex sollicitudin, aliquam lectus sed,",
                    "Time": "09:00",
                    "Date": "2020-09-22T00:00:00.000Z",
                    "Teacher": "Mr. Black"
                },
                {
                    "Id": 4,
                    "Title": "Donec mollis, libero",
                    "Price": 89.99,
                    "TeacherId": 4,
                    "MinAge": 1,
                    "MaxAge": 3,
                    "Description": "Hendrerit dui, quis cursus orci augue eget leo. Praesent non ex sollicitudin, aliquam lectus sed, gravida magna.",
                    "Time": "09:00",
                    "Date": "2020-09-22T00:00:00.000Z",
                    "Teacher": "Mrs. White"
                }
            ]
            
            return res.json(courseData);
        }
        catch (err) {
            return res.status(404);
        }
    };

    getCart = async (req, res) => {
        try {
            const cartData = [
                {
                    "ClassId": 3,
                    "CustomerId": 1,
                    "Price": 59.99,
                    "Count": 1,
                    "Title": "Nullam eleifend lectus mauris",
                    "Description": "Donec mollis, libero et porttitor finibus, nunc elit hendrerit dui, quis cursus orci augue eget leo. Praesent non ex sollicitudin, aliquam lectus sed,"
                },
                {
                    "ClassId": 2,
                    "CustomerId": 1,
                    "Price": 19.99,
                    "Count": 2,
                    "Title": "Aliquam lacinia nunc a bibendu",
                    "Description": "sus orci augue eget leo. Praesent non ex sollicitudin, aliquam lectus sed, gravida magna. Aliquam lacinia nunc a bibendum volutpat. Curabitur nec soda"
                },
                {
                    "ClassId": 3,
                    "CustomerId": 1,
                    "Price": 59.99,
                    "Count": 3,
                    "Title": "Nullam eleifend lectus mauris",
                    "Description": "Donec mollis, libero et porttitor finibus, nunc elit hendrerit dui, quis cursus orci augue eget leo. Praesent non ex sollicitudin, aliquam lectus sed,"
                },
                {
                    "ClassId": 2,
                    "CustomerId": 1,
                    "Price": 19.99,
                    "Count": 2,
                    "Title": "Aliquam lacinia nunc a bibendu",
                    "Description": "sus orci augue eget leo. Praesent non ex sollicitudin, aliquam lectus sed, gravida magna. Aliquam lacinia nunc a bibendum volutpat. Curabitur nec soda"
                },
                {
                    "ClassId": 3,
                    "CustomerId": 1,
                    "Price": 59.99,
                    "Count": 1,
                    "Title": "Nullam eleifend lectus mauris",
                    "Description": "Donec mollis, libero et porttitor finibus, nunc elit hendrerit dui, quis cursus orci augue eget leo. Praesent non ex sollicitudin, aliquam lectus sed,"
                }
            ]
            
            return res.json(cartData);
        }
        catch (err) {
            return res.status(404);
        }
    };

    return { getTeachers, getCourses, getCart };
}

module.exports = schoolController;