const getProductsByID = async (req, res) => {
  try {
    const id = req.query.id;
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    res.status(200).json({ ...data });
  } catch (error) {}
};

export default getProductsByID;
