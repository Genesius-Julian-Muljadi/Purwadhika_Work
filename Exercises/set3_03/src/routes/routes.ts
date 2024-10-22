import { Router } from "express";
import { DeleteListItem, GetList, GetListItem, PostListItem, PutListItem } from "../controllers/controllers";

const router = Router();

router.get("/list", GetList);
router.get("/list/:id", GetListItem);
router.post("/list", PostListItem);
router.put("/list/:id", PutListItem);
router.delete("/list/:id", DeleteListItem);
// router.get("/list/categories", GetListByCategory);

export default router;