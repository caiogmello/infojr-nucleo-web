import { prisma } from "../services/prisma";

export const createRow = async (data) => {
    const newRow = await prisma.row.create({
        data,
    });
    return newRow;
};

export const getAllRows = async () => {
    const rows = await prisma.row.findMany();
    return rows;
};

export const deleteRowById = async (id) => {
    const deletedRow = await prisma.row.delete({
        where: {
            id,
        },
    });
    return deletedRow;
};
