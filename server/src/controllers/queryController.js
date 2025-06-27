import cardModel from "../models/cardModel.js";

const searchController = async (req, res) => {
  try {

    const { searchText } = req.params;
    if (!searchText) {
      return res.status(400).json({ message: "Enter the value of searchText" });
    }
    const results = await cardModel.find({});
    if (!results) {
      return res.status(400).json({ message: "Sarees not found" });
    }
    const matched = results.filter((element) => {
      console.log(element.sareeName)
      return element.sareeName.toLowerCase().includes(searchText.toLowerCase()) || Number(element.sareePrice) === Number(searchText)
    });
    if (matched.length === 0) {
      return res.status(400).json({ message: "Sarees not found" });
    }
    res.json(matched)
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Internal Server Error" });
  }
}

const sortController = async (req, res) => {
  try {
    const { sortBy, isAscending } = req.query;
    const sorted = await cardModel.find().sort({ [sortBy]: isAscending === "true" ? 1 : -1 });
    res.json(sorted)
  } catch (err) {
    console.log(err);
    res.json({ message: "Internal Server Error" })
  }
}

export {
  searchController,
  sortController,
}
