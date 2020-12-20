const express     =  require('express')
const app         =  express()
const mongoose    =  require('mongoose')
const cors        =  require('cors')
const dbconfiq    =  require('./confiq/dbconfiq')

app.use(cors())
mongoose.connect(dbconfiq.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
}).then(()=>console.log("Db Connected Successfully")).catch(err => console.log("Db Not Connected Suceessfully "))
require('./routes/')(app)


app.listen(dbconfiq.port, dbconfiq.hostname, () => {
  console.log(`Server running at http://${dbconfiq.hostname}:${dbconfiq.port}/`);
});