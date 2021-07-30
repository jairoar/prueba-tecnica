const { PrismaClient } = require("@prisma/client");
const { json } = require("express");

const prisma = new PrismaClient();

module.exports = (app) => {
  //Agregar personaje favorito a la BD
  app.post("/addfavorite", async (req, res) => {
    const { id_character } = req.body;
    console.log(req.body);
    try {
      const add_favorite = await prisma.favorites.create({
        data: {
          id_character: id_character,
        },
      });
      res.json(add_favorite);
    } catch (e) {
      res.jsonp({ Error: "Error" });
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  });

  //Leer los personajes favoritos de la BD
  app.get("/getfavorite", async (req, res) => {
    try {
      const favorites = await prisma.favorites.findMany();
      res.json(favorites);
    } catch (e) {
      throw e;
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  });

  //Borrar personajes favoritos
  app.delete("/delfavorite/:id", async (req, res) => {
    const { id } = req.params;

    const deleted = await prisma.favorites.delete({
      where: { id_character: id },
    });
    res.json(deleted);
  });
};
