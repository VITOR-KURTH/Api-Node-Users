import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listCandidatos() {
    const candidatos = await sql`select * from candidatos`;
    return candidatos;
  }

  async createCandidato(candidato) {
    const id = randomUUID();
    console.log('id', id);
    const name = candidato.name;
    const partido = candidato.partido;
    const numero = candidato.numero;
    
    await sql`insert into candidatos (id, name, partido, numero)
    values (${id}, ${name}, ${partido}, ${numero})`
  }

  async updateCandidato(id, candidato) {
    const name = candidato.name;
    const partido = candidato.partido;
    const numero = candidato.numero;

    await sql`update candidatos set 
        name = ${name},
        partido = ${partido},
        numero = ${numero}
        where id = ${id}
    `;
  }

  async deleteCandidato(id) {
    await sql`delete from candidatos where id = ${id}`
  }

}