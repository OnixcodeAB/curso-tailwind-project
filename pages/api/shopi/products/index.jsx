const getAllProducts = async (req, res) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    res.status(200).json({ data });
  } catch (error) {}
};

export default getAllProducts;
