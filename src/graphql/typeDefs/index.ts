import { readFileSync } from "fs";
import { join } from "path";

const author = readFileSync( join(__dirname, "author.schema.graphql"), "utf-8" );
const book = readFileSync( join(__dirname, "book.schema.graphql"), "utf-8" );



export const typeDefs =  `${author} + ${book}`