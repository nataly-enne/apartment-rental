const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

// Rota para atualizar a quantidade de um item no carrinho
// Rota customizada para atualizar a quantidade de um item no carrinho
//server.patch("/cartItems/:id", (req, res) => {
//  const { id } = req.params;
//  const { quantity } = req.body;
//
//  // Atualiza a quantidade do item no banco de dados
//  router.db.get("products").find({ id: parseInt(id) }).assign({ quantity }).write();
//
//  res.sendStatus(200);
//});

server.listen(5099, () => {
  console.log("JSON Server is running on http://localhost:5099");
});
