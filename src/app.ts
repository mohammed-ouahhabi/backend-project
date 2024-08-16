import express from 'express';
import path from 'path';
import rideRoutes from './routes/rideRoutes';
import cors from 'cors'; // Importez le package cors

const app = express();

// Utilisation du middleware CORS
app.use(cors());

// Middleware pour les fichiers statiques
app.use('/images', express.static(path.join(__dirname, '../public/images')));

// Utilisation des routes définies
app.use('/api', rideRoutes);

export default app;
