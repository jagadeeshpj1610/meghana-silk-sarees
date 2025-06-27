import { Router } from "express"
import { searchController, sortController } from "../controllers/queryController.js";
const queryRouter = Router();

queryRouter.get('/search/:searchText', searchController);
queryRouter.get('/sort', sortController);

export default queryRouter;
