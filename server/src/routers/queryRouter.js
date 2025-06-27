import { Router } from "express"
import { search } from "../controllers/searchController.js";
const queryRouter = Router();

queryRouter.get('/search/:searchText', search)
// queryRouter.get('/sort',)

export default queryRouter;
