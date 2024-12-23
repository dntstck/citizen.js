// src/main.js

// Importing from utils
import { APP_NAME, formatMessage, visitCount, incrementVisitCount } from './utils.js';

// Importing from data
import { sampleData, findItemById, addItem } from './data.js';

console.log(formatMessage("Welcome to the application!")); // Output: [My Awesome Project] Welcome to the application!

incrementVisitCount();
incrementVisitCount();
console.log(`Visit Count: ${visitCount}`); // Output: Visit Count: 2

console.log(`Sample Data: ${JSON.stringify(sampleData)}`); // Output: Sample Data: [{"id":1,"value":"Data Item 1"},{"id":2,"value":"Data Item 2"},{"id":3,"value":"Data Item 3"}]

const newItem = { id: 4, value: 'Data Item 4' };
addItem(newItem);
console.log(`Updated Sample Data: ${JSON.stringify(sampleData)}`); // Output: Updated Sample Data: [{"id":1,"value":"Data Item 1"},{"id":2,"value":"Data Item 2"},{"id":3,"value":"Data Item 3"},{"id":4,"value":"Data Item 4"}]

const item = findItemById(2);
console.log(`Found Item: ${JSON.stringify(item)}`); // Output: Found Item: {"id":2,"value":"Data Item 2"}

