import { createServer, Model, Factory } from "miragejs";

export default function makeServer() {
  createServer({
    models: {
      point: Model,
    },

    routes() {
      this.get("/api/points10000", (schema) => {
        return {
          x: [...Array(10000).keys()],
          y: [...Array(10000).keys()],
        };
      });

      this.get("/api/points100000", (schema) => {
        return {
          x: [...Array(100000).keys()],
          y: [...Array(100000).keys()],
        };
      });

      this.get("/api/points1000000", (schema) => {
        return {
          x: [...Array(1000000).keys()],
          y: [...Array(1000000).keys()],
        };
      });

      this.get("/api/points10000000", (schema) => {
        return {
          x: [...Array(10000000).keys()],
          y: [...Array(10000000).keys()],
        };
      });
    },
    
  });
}
