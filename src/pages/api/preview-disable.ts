export default (req, res) => {
  const location = req.headers.referer || '/';

  res.clearPreviewData();
  res.writeHead(307, { Location: location });
  res.end();
};
