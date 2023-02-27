import app from "./app";
import { AppDataSource } from "./data-source";

const port = 3000;


AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");

    app.listen(port, () => {
      console.log(`Server is running at https//localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
