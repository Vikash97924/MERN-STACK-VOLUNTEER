// import app from "./index.js";


// app.listen(process.env.PORT, () => {
//   console.log(`Server Listening At Port ${process.env.PORT}`);
// });



import app from "./index.js";

// Define the port variable with a default value
const port = process.env.PORT || 4001; // Use port 4001 as the default if not set

app.listen(port, () => {
  console.log(`Server Listening At Port ${port}`);
});
