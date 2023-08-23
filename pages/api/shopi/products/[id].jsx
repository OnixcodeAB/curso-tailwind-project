const handler = async (req, res) => {
  try {
    const id = req.query.id;
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    res.status(200).json({ ...data });
  } catch (error) {}
};

export default handler;
