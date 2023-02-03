import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const serverLogin = (req,res) => {
    res.sendFile(join(__dirname, '../public/login.html'))

};

export const authController = { serverLogin };