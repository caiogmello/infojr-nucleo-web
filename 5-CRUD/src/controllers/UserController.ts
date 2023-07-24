import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export default {

    // Rota para criar usuário
    async createUser(req: Request, res: Response) {
        try {
            const { name, email, age, state, city } = req.body

            let user = await prisma.user.findUnique({ where: { email } })

            if (user) {
                return res.json({ error: "Já existe um usuário com este email" })
            }   
            user = await prisma.user.create({
                data: {
                    name,
                    email,
                    age,
                    state,
                    city,
                },
            })

            return res.json(user);
        } catch (error) {
            return res.json(error);
        }
    },

    // para listar um usuário por ID
    async listUserId(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const users = await prisma.user.findUnique({ where: { id: Number(id) } })
            if(!users) {
                return res.json({ error: "Usuário não encontrado." });
            }
            return res.json(users);
        } catch (error) {
            return error;
        }
    },

    // para listar um usuário por email
    async listUserEmail(req: Request, res: Response) {
        try {
            const { email } = req.params;
            const users = await prisma.user.findUnique({ where: { email } })
            if (!users) {
                return res.json({ error: "Não foi encontrado um usuário com esse email." });
            }
            return res.json(users);
        } catch (error) {
            return error;
        }
    },

    // para listar um ou mais usuários por nome
    async listUserName(req: Request, res: Response) {
        const names = req.params.names.split(',');
        try {
            const foundNames = await prisma.user.findMany({
                where: {
                    name: {
                        in: names,
                    },
                },
            })
    
            return res.json(foundNames);
        } catch (error) {
            return("Erro ao buscar usuários: " + error);
        }
        
    },

    // para atualizar um usuário
    async updateUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, email, age, state, city } = req.body;

            let users = await prisma.user.findUnique({ where: { id: Number(id) } })

            if (!users) {
                return res.json({ error: "Não foi encontrado esse usuário." });
            }

            users = await prisma.user.update({
                where: { id: Number(id) },
                data: {
                    name,
                    email,
                    age,
                    state,
                    city
                }
            })
            
            return res.json(users);
        } catch (error) {
            return error;
        }
    },

    // para deletar um usuário
    async deleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            let users = await prisma.user.findUnique({ where: { id: Number(id) } })
            if (!users) {
                return res.json({ error: "Usuário não encontrado." });
            }
            users = await prisma.user.delete({where: { id: Number(id)}});
            return res.json("Usuário " + users.email + " deletado do sistema.");
        } catch (error) {
            return error;
        }


    },

    // para listar todos os usuários
    async listUsers(req: Request, res: Response) {
        try {
            const users = await prisma.user.findMany();
            return res.json(users);
        } catch (error) {
            return error;
        }
    }
}