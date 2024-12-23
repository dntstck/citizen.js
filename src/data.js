// src/data.js

// Exporting an array of sample data
export const sampleData = [
  { id: 1, value: 'Data Item 1' },
  { id: 2, value: 'Data Item 2' },
  { id: 3, value: 'Data Item 3' }
];

// Exporting a function to find an item by ID
export function findItemById(id) {
  return sampleData.find(item => item.id === id);
}

// Exporting a function to add a new data item
export function addItem(newItem) {
  sampleData.push(newItem);
}

