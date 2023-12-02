
const express = require("express")
const app = express();
const PORT = 8080;

let feedbackArray = [
    { id: 1, name: "John", feedback: "Excellent service, very satisfied" },
    { id: 2, name: "Alice", feedback: "Prompt delivery, great product" },
    { id: 3, name: "Bob", feedback: "Friendly staff, quick response" },
    { id: 4, name: "Eva", feedback: "Quality products, fair prices" },
    { id: 5, name: "Charlie", feedback: "Improvement needed in communication" }
];

app.get("/", (request, response) => {
    console.log("Welcome to my first server");
    response.send("You made it to the server!")
});

app.get("/feedback", (req, res) => {

    res.send(feedbackArray);
});

app.get("/feedback/:id", (req, res) => {
    const params = req.params;
    console.log("The params ID is:", params.id)
    //res.send("Feedback with ID")
    const id = Number(req.params.id);

    const foundFeedback = feedbackArray.find((feedback) => feedback.id === id)
    res.send(foundFeedback);

})


app.post("/post", (request, response) => {
    console.log("Posted my first on the server");
    response.send("Posted a new thing at /")
})

app.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`);
}); 
