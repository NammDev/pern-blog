const uploadFile = async (req, res) => {
  const file = req.file
  res.status(200).json(`${file.filename} has been uploaded!`)
}

export { uploadFile }
