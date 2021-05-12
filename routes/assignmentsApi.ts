import express from 'express';
import { assignments } from '../models/assignments-database';

const routes = express.Router();

// GET /api/assignments
// Action: None
// Response: a JSON array of all assignments
// Response Code: 200 (OK)

routes.get("/api/assignments", (req, res) => {
    res.json(assignments);
    res.status(200);
});

// routes.get("/api/summary", (req, res) => {
//     res.json()
//     res.status(200);
// });

export default routes;