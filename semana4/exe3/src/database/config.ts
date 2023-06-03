import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

function connectionDatabase(){
    mongoose.connection.on("open", () => {
        console.log('Database open')
    })

    mongoose.connect(process.env.URL as string)
}

export { connectionDatabase }