import { Router } from "express"
import { searchController,redirectController, sortController } from "../controllers/queryController.js";
const queryRouter = Router();

queryRouter.get('/search/:searchText', searchController);
queryRouter.get('/search', redirectController);
queryRouter.get('/sort', sortController);

export default queryRouter;
