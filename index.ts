import express from 'express';
import exphbs from 'express-handlebars';
import fs from 'fs';

const app = express();

const PORT = 8000;

const todos: string[] = fs.readFileSync('todoSavings.txt', 'utf8').split(',');

app.engine('handlebars', exphbs()); // replaces app.set('view engine', 'pug')
app.set('view engine', 'handlebars');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const welcomeMessage = `list of your ${todos.length} ToDos (latest version):`;
app.get('/', (req, res) =>   
  res.render('index', { 
    title: 'Your ToDos', 
    message: welcomeMessage,
    todos: todos
  })
);

app.post('/', (req, res) => {
  console.log(req.body);
  todos.push(req.body.todoadder);
  fs.writeFile("todoSavings.txt", todos.toString(), function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("entry saved to file");
  });
  const addMessage = `entry no. ${todos.length} was added.`;
  res.render('index', { 
    title: 'ToDo added',
    message: addMessage,
    todos: todos
  })
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

// look up usage:
// app.put('/', (req, res) => res.send("put"))
// app.patch('/', (req, res) => res.send("patch"))
// app.delete('/', (req, res) => res.send("delete"))

