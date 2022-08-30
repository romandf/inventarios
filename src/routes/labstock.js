import { Router } from "express";
import labCtrl from "../controllers/lstockcontroller";

const router = Router();
const { getdata, createdata, getOneData, updateData, deleteData } = labCtrl;

router.route("/")
.get(getdata)
.post(createdata);

router.route("/:id")
.get(getOneData)
.put(updateData)
.delete(deleteData);

module.exports = router;
