"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const author = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, "author.schema.graphql"), "utf-8");
const book = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, "book.schema.graphql"), "utf-8");
exports.typeDefs = `${author} + ${book}`;
