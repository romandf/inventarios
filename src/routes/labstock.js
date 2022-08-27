import { Router } from "express";
import labCtrl from "../controllers/lstockcontroller";

const router = Router();
const { getdata, createdata } = labCtrl;

router.route("/")
.get(getdata)
.post(createdata);

router.route("/:id")
.get()
.put()
.delete();

module.exports = router;
