import { createServer } from "miragejs";

export default function makeServer() {
  createServer({
    routes() {
      this.get("/api/reminders", () => ({
        reminders: [{ id: 1, message: "Hello World" }],
      }));
    },
  });
}
