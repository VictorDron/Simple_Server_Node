const express = require('express');
const app = express();
app.use(express.json()); // Define o tipo de conteúdo para JSON

let users = []; // Array para armazenar a lista de usuários

app.get('/',(req,res)=>{
    res.send('Olá, mundo');
})
// Rota para criar um novo usuário
app.post('/users',(req, res)=>{
  const user = req.body;
  users.push(user);
  res.send('Usuário criado com sucesso.');
});

// Rota para listar todos os usuários
app.get('/users', (req, res)=> {
  res.send(users);
});

// Rota para atualizar um usuário existente
app.put('/users/:id', (req, res)=>{
  const id = req.params.id;
  const user = req.body;
  users[id] = user;
  res.send('Usuário atualizado com sucesso.');
});

// Rota para excluir um usuário existente
app.delete('/users/:id', (req, res)=> {
  const id = req.params.id;
  users.splice(id, 1);
  res.send('Usuário excluído com sucesso.');
});

app.listen(3000, ()=>{
  console.log('Servidor em: http://localhost:3000/!');
});
