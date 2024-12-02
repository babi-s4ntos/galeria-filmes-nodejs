const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true }));

const filmes = [];

app.get('/', (req, res) => {
  res.render('index', { filmes });
});

app.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

app.post('/cadastro', upload.single('imagem'), (req, res) => {
  const { titulo, ano, genero } = req.body;
  const imagem = req.file ? `/uploads/${req.file.filename}` : '';

  filmes.push({ titulo, ano, genero, imagem });
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

