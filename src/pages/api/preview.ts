export default (req, res) => {
  const id = req.query.id;

  res.setPreviewData({});
  res.writeHead(307, { Location: `/posts/${id}` });
  res.end();
};
