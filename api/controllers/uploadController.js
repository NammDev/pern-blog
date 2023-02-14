const uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).send({ error: 'No file was uploaded' })
  } else {
    res.status(200).json(`${file.filename} has been uploaded!`)
  }
}

export { uploadFile }
