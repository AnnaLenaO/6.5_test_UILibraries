import express from "express";
import { engine } from "express-handlebars";
import { getMovie, getMovies } from "./movies.js";
import { marked } from "marked";
import { builder } from "../buildReviewBody.js";

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

//used for POST request.
import fs from "fs/promises";
import path from "path";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const menu = [
  { name: "Movies", url: "/movies" },
  { name: "About us", url: "/aboutus" },
  { name: "News & events", url: "/newsevents" },
];

async function renderPage(response, page, extraData = {}) {
  response.render(page, {
    menuLink: menu.map((link) => {
      return {
        label: link.name,
        link: link.url,
      };
    }),
    ...extraData,
  });
}

app.get("/", async (request, response) => {
  renderPage(response, "index");
});

app.get("/movies", async (request, response) => {
  const movies = await getMovies();
  renderPage(response, "movies", { movies });
});

app.get("/movies/:movieId", async (request, response) => {
  const movie = await getMovie(request.params.movieId);
  movie.intro = marked(movie.intro);
  renderPage(response, "movie", { movie });
});

app.get("/aboutus", async (request, response) => {
  renderPage(response, "aboutus");
});

app.get("/newsevents", async (request, response) => {
  renderPage(response, "newsevents");
});

app.post("/review", (request, response) => {
  const id = request.body.id;
  const comment = request.body.comment;
  const rating = request.body.rating;
  const author = request.body.author;

  const reviewAttributes = {
    movie: id,
    comment: comment,
    rating: rating,
    author: author,
    createdBy: author,
    updatedBy: "nil",
  };

  console.log("builder:", builder(request.body));
  console.log("======");
  // response.status(200).send("Review received");

  // Convert the JavaScript object to a JSON string
  const jsonData = JSON.stringify(builder(reviewAttributes)) + "\n";

  const fetchUrl = `https://plankton-app-xhkom.ondigitalocean.app/api/reviews`;
  fetch(fetchUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to write data to database");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data written to database:", data);
      response.status(201).send("Data written to database");
    })
    .catch((error) => {
      console.error("Error writing to database:", error.message);
      response.status(500).send("Error writing to database");
    });
});

app.use("/static", express.static("./static"));
app.use("/public", express.static("./public"));
export default app;
