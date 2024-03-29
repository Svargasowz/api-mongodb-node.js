import 'dotenv/config'
import express from 'express'
import "./src/database/Savr.conexion.js"
import clientes from './src/routes/Savr.Clientes.routes.js'
import intereses from './src/routes/Savr.Intereses.routes.js'
import login from './src/routes/Savr.Token.routes.js'
import articulos from './src/routes/Savr.Articulos.routes.js'
import alquiler from './src/routes/Savr.Alquiler.routes.js'
import busqueda1 from './src/routes/Savr.Busqueda1.routes.js'
import busqueda2 from './src/routes/Savr.Busqueda2.routes.js'
import busqueda3 from './src/routes/Savr.Busqueda3.routes.js'
import pagos from './src/routes/Savr.Pagos.routes.js' 

const app=express()
app.use(express.json())
app.use("/SavrClientes",clientes)
app.use("/SavrToken",login)
app.use("/SavrIntereses",intereses)
app.use("/SavrArticulos",articulos)
app.use("/SavrAlquiler",alquiler)
app.use("/SavrBusqueda1",busqueda1)
app.use("/SavrBusqueda2",busqueda2)
app.use("/SavrBusqueda3",busqueda3)
app.use("/SavrPago",pagos)
app.set('view engine','ejs')
app.set('views','./views')

app.use(express.static('./public'))

app.get('/document',(req,res)=>{
    res.render('document.ejs')
})


const PORT=process.env.PORT||3000//esto es para poder acceder a las variables de .env
app.listen(PORT,()=>{
    console.log("server funcionando 🔥😡🔥")
})