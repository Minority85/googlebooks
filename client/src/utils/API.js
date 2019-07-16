import axios from "axios";
require("dotenv").config();

const APIKEY = process.env.APIKEY;

export default {
  getBooks: function(query) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        query +
        "&key=" + APIKEY
    );
  },

  grabBooks: function(){
    return axios.get("/api/books");
  },

  saveBook: function(bookInfo) {
    return axios.post("/api/books", bookInfo);
  },

  deleteBook: function(id) {
    return axios.delete("/api/books", {data: {title: id}})
  }

};