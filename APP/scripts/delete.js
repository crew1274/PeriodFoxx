'use strict'

const { query } = require("@arangodb")
query `
FOR c IN CASSETTES
FILTER c.datetime < DATE_FORMAT(DATE_NOW(), '%yyyy-%mm-%dd %hh:%ii:%ss')
REMOVE c IN CASSETTES
`.toArray()