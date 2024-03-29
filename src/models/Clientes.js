import mongoose from "mongoose";
import bcryptjs from 'bcryptjs'

const clienteSchema=new mongoose.Schema({
    identificacion:{
        type:Number,
        required:true,
        unique:true
    },
    nombres:{
        type:String,
        required:true
    },
    direccion:{
        type:String,
        required:true
    },
    telefono:{
        type:String,
        required:true 
    },
    fecha:{
        type:Date,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
clienteSchema.pre("save",async function(next){
    const clientes=this
    if(!clientes.isModified('password'))return next()
    try{
        const salt = await bcryptjs.genSalt(10)
       clientes.password=await bcryptjs.hash(clientes.password,salt)
       next()
    }catch(error){
        console.log(error)
        throw new Error("Fallo el has de contraseña")
    }
})
clienteSchema.methods.comparePassword=async function(clienPassword){
    return await bcryptjs.compare(clienPassword,this.password)
}

export const Clientes=mongoose.model('Clientes',clienteSchema)