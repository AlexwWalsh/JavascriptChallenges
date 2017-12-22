let Person = require('./models').Person

Person.create({
  name: 'Jimmy John',
  todo: 'Grocery Shopping'
}).then(function(contact){
  console.log(person.get())

  return Person.createTasks({
    chores: 'Bathroom',
    personId: '1'
  })
})
.then(function(tasks){
  console.log("New Phone", tasks.get())
}).catch(function(error){
  console.log(error)
})
