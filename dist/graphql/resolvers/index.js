"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const data_1 = require("../../data");
exports.resolvers = {
    Query: {
        getBooks: (_parent, _args, _context, _info) => {
            return data_1.Books;
        },
        getAuthors: (_parent, _args, _context, _info) => {
            return data_1.Authous;
        },
    },
    Book: {
        author: (_parent, _args, _context, _info) => {
            const { author: authorId } = _parent;
            const [author] = data_1.Authous.filter(author => author.id == authorId);
            return author;
        },
    },
    Author: {
        books: (_parent, _args, _context, _info) => {
            const { id } = _parent;
            return data_1.Books.filter(book => book.author == id);
        },
    },
    Mutation: {
        createBook: () => { },
        createAuthor: () => { }
    }
};
