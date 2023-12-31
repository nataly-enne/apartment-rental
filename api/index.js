const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// converte somente a primeira letra para maiúscula
const toLowerCaseFirstLetter = (value) => (value ? value.toLowerCase() : value);

// filtra os imóveis com base na cidade e tipo (ignorando diferença de maiúsculas e minúsculas)
server.get("/properties", (req, res) => {
  const city = toLowerCaseFirstLetter(req.query.city);
  const type = toLowerCaseFirstLetter(req.query.type);
  const searchText = toLowerCaseFirstLetter(req.query.searchText);

  let properties = router.db.get("properties").value();

  if (city || type || searchText) {
    if (city) {
      properties = properties.filter((property) => toLowerCaseFirstLetter(property.city) === city);
    }
    if (type) {
      properties = properties.filter((property) => toLowerCaseFirstLetter(property.type) === type);
    }
    if (searchText) {
      properties = properties.filter(
        (property) =>
          toLowerCaseFirstLetter(property.city).includes(searchText) ||
          toLowerCaseFirstLetter(property.neighborhood).includes(searchText)
      );
    }
  }

  res.json(properties);
});

server.use(router);

server.listen(5099, () => {
  console.log("JSON Server is running on http://localhost:5099");
});
