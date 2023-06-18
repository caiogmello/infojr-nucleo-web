import { create, getAll, deleteRow, stats } from "../controllers/row.controller";

export const rowRoutes = app => {
    app.post("/row/create", create);
    app.get("/row", getAll);
    app.get("/row/stats", stats);
    app.delete("/row/delete/:id", deleteRow);
}

export default rowRoutes;