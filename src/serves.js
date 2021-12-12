// import express from "express";
// import engine from "react-engine";
// // iniciamos nuestra aplicación de express
// const app = express();
// // definimos el engine para archivos jsx
// app.engine(".jsx", engine.server.create());
// // configuramos la ruta a las vistas
// app.set("views", path.join(__dirname, "views"));
// // indicamos que el engine a usar es el de archivos jsx
// app.set("view engine", "jsx");
// // le indicamos que use react-engine como engine de nuestras vistas
// app.set("view", engine.expressView);

// // simplemente llamamos a res.render y react-engine se encarga de renderizar el componente Home para nosotros
// app.get("/", (req, res) => res.render("home"));

// app.listen(9000);
