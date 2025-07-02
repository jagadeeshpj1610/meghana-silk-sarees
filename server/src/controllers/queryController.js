import cardModel from "../models/cardModel.js";

const searchController = async (req, res) => {
  try {

    const { searchText } = req.params;

    const results = await cardModel.find({}).populate('sareePhoto');
    if (!results) {
      return res.status(400).json({ message: "Sarees not found" });
    }
    const matched = results.filter((element) => {
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

const redirectController = async (req, res) => {
  try {
    res.redirect('/query/search/ ')
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
  redirectController,
  sortController,
}
