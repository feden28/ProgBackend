import { Router } from 'express';
import path from 'path';
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = Router();

router.route('/').get((req, res) => {
    console.log (__dirname);
    
    res.sendFile(path.join(__dirname, '../public/index.html')); //ruta absoluta a mi html
});

export default router;