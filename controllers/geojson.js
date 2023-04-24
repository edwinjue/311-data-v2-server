exports.geocode = (req, res) => {
  const { latitude = '', longitude = '' } = req.query;

  res.status(200).json({
    latitude,
    longitude,
  });
};
