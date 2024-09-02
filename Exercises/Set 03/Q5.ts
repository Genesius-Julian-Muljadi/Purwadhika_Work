// Q: Write a code to remove the first occurrence of a given “search string” from a string

const input_str: string = "Only the Avatar, master of all four elements could stop them.";
const input_search_str: string = "the Avatar";

let newstr: string = input_str.replace(input_search_str, "");
console.log(newstr);
// But, when the world needed him most, he was replaced by an empty string.