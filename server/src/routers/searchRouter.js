import { Router } from "express";
const searchRouter = Router();
import { search } from "../controllers/searchController.js";

searchRouter.get('/:searchText', search);

export default searchRouter;
