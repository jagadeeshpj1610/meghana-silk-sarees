import cardModel from "../models/cardModel";

const search = (req, res) => {
  const {searchText}  = req.body;
  if(!searchText){
    return res.status(400).json({message: "Enter the value of searchText"});
  }
  const results = cardModel.aggregate([
    {$match: {sareeName: searchText}}
  ])
  res.json(results)
}
