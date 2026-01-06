const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 13 * * 2', function () {
    console.log('Execuntando tarefa 1!', new Date().getSeconds())
})