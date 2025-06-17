import cardModel from "../models/cardModel.js";

const uploadCard = async (req, res) => {
  try {

    const { sareeName, sareePrice } = req.body;
    const sareePhoto = res.uploadedPhoto.id;
    if (!sareeName || !sareePrice || !sareePhoto) {
      return res.status(400).json({ message: "Saree name, saree price and saree photo is required" })
    }
    if (!sareeName.match(/^[a-zA-Z ]+$/)) {
      return res.status(400).json({ message: "Saree name must be letters" })
    }
    if (!String(sareePrice).match(/^\d+(\.\d{1,2})?$/)) {
      return res.status(400).json({ message: "Saree Price must be numbers" })
    }
    const uploadedCard = await cardModel.create({ sareeName, sareePrice, sareePhoto });
    res.json({ uploadedCard })
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Internal server error" })
  }
}

const fetchCard = async (req, res) => {
  try{

    const cards = await cardModel.find({}).populate('sareePhoto')
    res.json(cards)

  } catch(err){
    console.log(err);
    res.status(400).json({message: "Internal server error"})
  }
}

export {
  uploadCard,
  fetchCard
};
