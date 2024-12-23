// src/utils.js

// Exporting a constant
export const APP_NAME = "My Awesome Project";

// Exporting a function to format a message
export function formatMessage(message) {
  return `[${APP_NAME}] ${message}`;
}

// Exporting a variable
export let visitCount = 0;

// Exporting a function to increment the visit count
export function incrementVisitCount() {
  visitCount++;
}

