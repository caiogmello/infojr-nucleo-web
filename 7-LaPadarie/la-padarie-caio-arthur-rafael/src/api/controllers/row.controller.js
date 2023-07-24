import { row } from "../repositorys/row.repository";
import { prisma } from "../services/prisma";

export const create = async (req, res) => {
    try {
      const { name, breadQty } = req.body;
  
      const newRow = await prisma.row.create({
        data: {
          name: name,
          breadQty: breadQty,
        },
      });
  
      res.status(200).send(newRow);
    } catch (e) {
      res.status(400).send(e);
    }
  };

  export const getAll = async (req, res) => {
    try {
      const rows = await prisma.row.findMany({
        where: {
          deleted: false,
        },
      });
      res.status(200).send(rows);
    } catch (e) {
      res.status(400).send(e);
    }
  };
  

export const deleteRow = async (req, res) => {
    try {
      const id = req.params.id;
  
      const updatedRow = await prisma.row.update({
        where: {
          id: parseInt(id),
        },
        data: {
          deleted: true,
        },
      });
  
      res.status(200).send("Registro deletado com sucesso");
    } catch (e) {
      res.status(400).send(e);
    }
  };  

export const stats = async (req, res) => {
    try {
        const rowCount = await prisma.row.count({
            where: {
                deleted: false
            }
        });
        const paesVendidos = await prisma.row.aggregate({
            _sum: {
              breadQty: true,
            }
        });
        res.status(200).json({ rowCount, paesVendidos: paesVendidos._sum.breadQty });
      } catch (e) {
        res.status(500).send(e);
      }
};
