import pkg from 'pg';
const {Pool} = pkg;
import dotenv from 'dotenv';
dotenv.config();


let pool;

try{
    pool = new Pool({
        host: 'db.easafzhrypdndcnilkgp.supabase.co',
        port: '6543',
        user: 'postgres',
        password: 'UWpydAUjMP9H6YrT',
        database: 'postgres'
    })
}catch(e){
    console.log(e);
}

console.log('connecting to Supabase sucess!');

export default pool;