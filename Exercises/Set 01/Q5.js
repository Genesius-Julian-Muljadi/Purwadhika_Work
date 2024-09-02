// Q: Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).

const input_days = 1194;

console.log(((`
    ${Math.floor(input_days / 365)} years,
    ${Math.floor((input_days % 365) / 30)} months,
    ${Math.floor((input_days % 365) % 30)} days
    `).replace(/\n/g, "")).trim());
    
// Note that number.toFixed rounds to closest, not down. Math.floor needed to round down.