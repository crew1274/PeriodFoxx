'use strict';
const queues = require("@arangodb/foxx/queues")
const queue = queues.create('delete_queue')
queue.push({
    mount: module.context.mount,
    name: 'deletejs'
},
{},
{
    repeatTimes: Infinity,
    repeatDelay: 3 * 60 * 60 * 1000
})