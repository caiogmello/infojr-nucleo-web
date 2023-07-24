import { Router } from "express";
import UserController from "./controllers/UserController";

const router = Router();

// criar usuário
router.post("/user", UserController.createUser);
// pegar por id
router.get("/user/:id", UserController.listUserId);
// pegar por email
router.get("/user/mail/:email", UserController.listUserEmail);
// pegar um ou mais usuários por nome
router.get("/user/names/:names", UserController.listUserName);
// deletar por id
router.delete("/user/:id", UserController.deleteUser);
// atualizar por id
router.put("/user/:id", UserController.updateUser);
// pegar todos os usuários (não obrigatório)
router.get("/users/", UserController.listUsers);

export {router};