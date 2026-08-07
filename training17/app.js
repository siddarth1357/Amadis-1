const Fastify = require("fastify");
const app = Fastify({ logger: true });

// In-memory data (resets when the server restarts)
let users = [];
let nextId = 1;

// ---------------- GET ----------------

// Home
app.get("/", async () => {
    return {
        message: "Hello World"
    };
});

// List all users
app.get("/users", async () => {
    return {
        count: users.length,
        users
    };
});

// Get a user by id
app.get("/users/:id", async (request, reply) => {
    const id = Number(request.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return reply.code(404).send({
            error: "User not found"
        });
    }

    return { user };
});

// ---------------- POST ----------------

// Create a user
app.post("/users", async (request, reply) => {
    const { name, email } = request.body || {};

    if (!name || !email) {
        return reply.code(400).send({
            error: "name and email are required"
        });
    }

    const user = {
        id: nextId++,
        name,
        email
    };

    users.push(user);
    return reply.code(201).send({ user });
});

// Echo the posted body back
app.post("/echo", async (request) => {
    return {
        received: request.body
    };
});

// Echo query parameters
app.get("/query", async (request) => {
    return {
        query: request.query
    };
});

// Greet a person by name
app.get("/greet/:name", async (request) => {
    return {
        message: `Hello ${request.params.name}`
    };
});

// Count users
app.get("/users/count", async () => {
    return {
        count: users.length
    };
});

// Add up an array of numbers
app.post("/sum", async (request, reply) => {
    const { numbers } = request.body || {};

    if (!Array.isArray(numbers) || numbers.some(n => typeof n !== "number")) {
        return reply.code(400).send({
            error: "numbers must be an array of numbers"
        });
    }

    return {
        sum: numbers.reduce((a, b) => a + b, 0)
    };
});

// Start the server
app.listen({ port: 3000 });
