import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { MONGODB_URI } from './config/config.js'
import { fetchAllData } from './utils/update.js'
import { checkRequestKeyHeader } from './middleware/middleware.js'
import { indexRouter } from './controllers/index.js'
import { updateRouter } from './controllers/update.js'
import { searchRouter } from './controllers/search.js'



mongoose
  .connect(MONGODB_URI)
  .then(async () => {
    console.log('Ⓜ️ Connected to MongoDB!')
    await fetchAllData()
  })
  .catch(err => console.log('🟥 MONGODB ERROR:', err.message))

export const app = express()
app.use(cors())
app.use(checkRequestKeyHeader)
app.use(express.json())
app.use('/', indexRouter)
app.use('/api/update', updateRouter)
app.use('/api/search', searchRouter)