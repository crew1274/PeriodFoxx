'use strict';
const db = require('@arangodb').db;
const collections = [];

for (const localName of collections) {
  const qualifiedName = module.context.collectionName(localName);
  db._drop(qualifiedName);
}

const queues = require("@arangodb/foxx/queues") 
queues.delete("delete_queue")