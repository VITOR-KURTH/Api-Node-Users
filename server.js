
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/candidatos', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createCandidato(body);
    return reply.status(201).send();
})

// READE
server.get('/candidatos', async () => {
    const candidatos = await databasePostgres.listCandidatos();
    return candidatos;
});

// UPDATE
server.put('/candidatos/:id', async (request, reply) => {
    const userID = request.params.id;
    const body = request.body;
    await databasePostgres.updateCandidato(userID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/candidatos/:id', async (request, reply) => {
    const userID = request.params.id;
    await databasePostgres.deleteCandidato(userID);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
