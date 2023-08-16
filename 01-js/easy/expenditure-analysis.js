/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/


/**
 * @typedef {Object} Transaction
 *
 * @property {number} id - The unique identifier for an item.
 * @property {number} timestamp - The time at which the item was created. 
 * This is represented as the number of milliseconds since 01 January, 1970 UTC.
 * @property {number} price - The price of the item.
 * @property {string} category - The category to which the item belongs.
 * @property {string} itemName - The name of the item.
 */

/**
 * @typedef {object} Expanse
 * 
 * @property {string} category
 * @property {number} totalSpent
 */

/** 
 * @param {Transaction[]} transactions
 * @returns {Expanse[]}
 */
function calculateTotalSpentByCategory(transactions) {
  
  /** @type {Expanse[]} */
  let totalExpanses = []
  transactions.forEach(transaction => {
    let expanseInList = totalExpanses.find(expanse => expanse.category == transaction.category)
    if(expanseInList) expanseInList.totalSpent+=transaction.price
    else totalExpanses.push({category: transaction.category, totalSpent: transaction.price})
  })
  
  return totalExpanses
}

module.exports = calculateTotalSpentByCategory;
