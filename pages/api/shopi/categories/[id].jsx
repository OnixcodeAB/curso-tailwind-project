const getProductsByCategory = async (req, res) => {
  try {
    const string = req.query.id;
    const response = await fetch(
      `https://dummyjson.com/products/category/${string}`
    );
    const data = await response.json();
    res.status(200).json({ ...data });
  } catch (error) {}
};

export default getProductsByCategory;
