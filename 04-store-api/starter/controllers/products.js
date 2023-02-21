const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({ price:{ $gt:30 }})
    .sort("price")
    .select("name price")
    .limit(10)
    .skip(5);
    res.status(200).json({ products, nbHits: products.length });
};

// We will use limit and skip methods to setup a pagination functionality.

// When you use the ExpressJS async errors middleware, you get two main benefits:
// 1.Instead of using next(), i.e, passing next as an argument and calling it later,
// simply throw an error in the try block.
// 2. Also you don't need to set up the try/catch block as well. This makes your code cleaner.

const getAllProducts = async (req, res) => {
    const { featured, company, name, sort, fields, numericFilters } = req.query;
    const queryObject = {};

    if(featured){
        queryObject.featured = featured === "true" ? true : false
    };

    if(company){
        queryObject.company = company
    };

    if(name){
        queryObject.name = { $regex: name, $options: "i" }
    };

    if(numericFilters){
        const operatorMap = {
            ">" : "$gt",
            ">=" : "$gte",
            "=" : "$eq",
            "<" : "$lt",
            "<=" : "$lte",
        }
        const regEx = /\b(<|>|>=|=|<|<=)\b/g;
        let filters = numericFilters.replace(
            regEx, 
            (match) => `-${operatorMap[match]}-` 
        );
        const options = ["price", "rating"];
        filters = filters.split(",").forEach((item) => {
            const [field, operator, value] = item.split("-")
            if(options.includes(field)){
                queryObject[field] = { [operator]: Number(value) }
            }
        })
    };

    console.log(queryObject);

    // const products = await Product.find(queryObject).sort();

    // There may be scenerios where users won't pass any query parameter
    // for sort. So to allow for such, the "let" key word is used to handle
    // it conditionally.

    let result = Product.find(queryObject); // remove await here and set it up when we have the complete results
    if(sort){
       const sortList = sort.split(",").join(" ") 
       result = result.sort(sortList)
    } else {
        result = result.sort("createdAt")
    };

    if(fields){
        const fieldsList = fields.split(",").join(" ") 
        result = result.select(fieldsList)
    };

    const page = Number(req.query.page) || 1 ;
    const limit = Number(req.query.limit) || 10 ;
    const skip = (page -1) * limit;

    result = result.skip(skip).limit(limit); 

    // How "skip" is used to produce pagination

    // Let Total Nos of items = 23 and limit = 7. 
    // Hence, 23 divided by limit value 7 = 4 7 7 7 2 
    // That is, a total of 4 pages results with 7 items on
    // pages 1, 2, 3 and 2 items on page 4.

    // const skip = (page - 1) * limit;
    // Assume page limit is 7 items and the user queries: 
    // Page 1:  skip = (1 - 1) * 7 = 0 * 7 = 0;
    // Page 2:  skip = (2 - 1) * 7 = 1 * 7 = 7;
    // Page 3:  skip = (3 - 1) * 7 = 2 * 7 = 14;



    // Assume a user passes page 2 as query.


    const products = await result;
    res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
    getAllProducts,
    getAllProductsStatic,
};