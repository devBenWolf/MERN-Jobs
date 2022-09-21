import express from "express"
const router = express.Router()

import {createJobs, deleteJob, getAllJobs, updateJob, showStats} from "../controllers/jobsController.js"

router.route(`/`).post(createJobs).get(getAllJobs)
router.route(`/stats`).get(showStats)
router.route(`/:id`).delete(deleteJob).patch(updateJob)

export default router