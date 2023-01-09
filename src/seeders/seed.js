const db = require('../utils/database')
const Users = require('../models/users.model')
const Todos = require('../models/todos.models')
const Categories = require('../models/categories.models')

const users = [
    { username: 'Ricardo', email: 'axel.111yo@gmail.com', password: '1234' },
    { username: 'Axel', email: 'axel2.111yo@gmail.com', password: '1234' },
    { username: 'Reyes', email: 'axel3.111yo@gmail.com', password: '1234' }
]
const todos = [
    { title: 'tarea1', description: 'desc1', userId: 1 },
    { title: 'tarea2', description: 'desc2', userId: 2 },
    {title:'tarea3',description:'desc3',userId:1}
]

const categories=[
        {name:'Tarea del hogar'},
        {name:'Limpieza'}
]
const todoCatetegories = [

]
// const categories = []
// const todosCategories = []

db.sync({force:true})
.then(()=>{
    users.forEach((user)=>Users.create(user))
    setTimeout(()=>{
        todos.forEach(todo=>Todos.create(todo))
    },100)
    categories.forEach(category=>Categories.create(category))
}).then(()=>{

})
.catch(error=>console.log(error))
