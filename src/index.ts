import app from './app'; // Assurez-vous que le chemin est correct

const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
