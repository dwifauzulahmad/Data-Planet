import pkg from "pg";

 const {Client} = pkg;

export const client = new Client({
    host: "db.cvttueprclkwhojnahne.supabase.co",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "iwanhanafiah"
})

await client.connect();
console.log("Terhubung ke Basis Data");
// const result = await client.query("SELECT * FROM mahasiswa");
// console.log(result.rows);