import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createPool({
  uri: process.env.MYSQL_URL,
  waitForConnections: true,
  connectionLimit: 10,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

const testConnection = async () => {
  try {
    const [rows] = await db.query("SELECT NOW() AS now");
    console.log("DB connected:", rows[0].now);
  } catch (error) {
    console.error("DB connection error:", error.message);
  }
};

testConnection();
