import express from 'express';

// rest of the code remains same
const app = express();
app.set('view engine', 'pug')
const PORT = 8000;


const todos: string[] = ['create todo list ', 'fill todo list', 'develop an app'];

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// req -> request
// res -> response
app.get('/', (req, res) => 
  res.render('index', { 
    title: 'Hey', 
    message: 'Hello there!',
    todos: todos
  })
);

app.post('/', (req, res) => {
  console.log(req.body);
  todos.push(req.body.todoadder);
  res.render('index', { 
    title: 'Hey',
    message: 'Hello there! Your entry was added!',
    todos: todos
  })
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

// app.post('/json', (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// });
// app.put('/', (req, res) => res.send("put"))
// app.patch('/', (req, res) => res.send("patch"))
// app.delete('/', (req, res) => res.send("delete"))

/* // variables - Java
// String hello = "hello"
const hello = "hello"
const one = 1
const money = 3.50
const hasCorona = false
const hasNotCorona = true
const dict = {
  a: "hallo",
  b: 1,
  c: true,
  get: (x, y) => 1
}
const dictValue = dict.a
dict.get(1,2)
1 + 1 
"hello " + "world" + "!"
1 + 1.5
true || false
"1" + 1

// int addOne(int a) {
//   return a + 1;
// }
function addOne(a: number): number {
  return a + 1
}

const addOneFunctionValue = function(a: number): number {
  return a + 1
}

addOne(1)
addOneFunctionValue(1)

const addOneShort: (_:number) => number = a => a + 1
*/
