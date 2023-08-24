const getAllProductsCategory = async (req, res) => {
  try {
    const string = req.query.id;
    const response = await fetch(`https://dummyjson.com/products/category`);
    const data = await response.json();
    res.status(200).json({ ...data });
  } catch (error) {}
};

export default getAllProductsCategory;
