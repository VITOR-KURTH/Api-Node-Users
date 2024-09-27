import { sql } from './db.js'

sql`
  CREATE TABLE candidatos (
      id text PRIMARY KEY,
      name character varying(255),
      partido character varying(255),
      numero character varying(255)
  );
`.then(() => {
  console.log('tabela criada');
})