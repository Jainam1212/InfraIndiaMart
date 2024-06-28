import mongoose from "mongoose";

const db =
  "mongodb+srv://jainam:iim@infraindiamart.bzvtnwl.mongodb.net/iim?retryWrites=true&w=majority&appName=infraindiamart";
export const connectDataBase = () => {
  mongoose
    .connect(db)
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

// mongoose.connect("mongodb://0.0.0.0:27017", {dbName:"iim",}).then(()=>{
//   console.log('connected to database');
//   const port = 3000;
//   app.listen(port, ()=>{
//     console.log(`server running on port ${port}`);
//   });
// }).catch(err=>{
//   console.log(err);
// });