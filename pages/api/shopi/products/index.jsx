const getAllProducts = async (req, res) => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    res.status(200).json({ data });
  } catch (error) {}
};

export default getAllProducts;
