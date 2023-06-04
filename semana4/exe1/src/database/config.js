import mongoose from "mongoose"
const url = "link"

async function initializeDatabase() {
  mongoose.connection
    .on("error", (error) => {
      console.log("ERROR: connection to mongo failed: ", error)
    })
    .on("close", () => {
      console.log("Connection to mongo ended")
    })
    .once("open", () => {
      console.log("Connection to mongo")
    })

   await mongoose.connect(url)
}

function disconnectDatabase() {
  mongoose.disconnect()
}

export { initializeDatabase, disconnectDatabase }
