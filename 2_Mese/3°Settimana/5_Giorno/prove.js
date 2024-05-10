const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZGFhYTgxODQ0MjAwMTUzNzU4OTEiLCJpYXQiOjE3MTUzMjk3MDYsImV4cCI6MTcxNjUzOTMwNn0.4xpO8LLT494FLxIL0urbN6RfM4mcUltESq37iH6V4TE";

fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error("Errore nella richiesta HTTP");
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error("Errore:", error);
});