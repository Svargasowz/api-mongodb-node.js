import { Intereses } from "../models/Intereses.js";
import { Alquiler } from "../models/Alquiler.js";
import { Clientes } from "../models/Clientes.js"; 

export const listarInteresesPagados = async (req, res) => {
    const { identificacion } = req.params;
    try {
        const cliente = await Clientes.findById(identificacion);
        if (!cliente) {
            return res.status(403).json({ message: "Cliente no encontrado" });
        }
  
        const alquileres = await Alquiler.find({ cliente: cliente._id });
        if (alquileres.length === 0) {
            return res.status(404).json({ message: "No se encontraron alquileres para este cliente" });
        }

        const interesesPagados = await Intereses.find({ 
            alquiler: { $in: alquileres.map(alquiler => alquiler._id) }, 
            estado: 'fue pagado' // Agregar esta condición
        });

        if (interesesPagados.length === 0) {
            return res.status(405).json({ message: "No se encontraron intereses pagados por este cliente" });
        }

        const resultados = interesesPagados.map(interes => {
            const alquiler = alquileres.find(a => a._id.toString() === interes.alquiler.toString());
            return {
                nombreCliente: cliente.nombres,
                alquiler: alquiler._id,
                articulo: alquiler.articulo,
                mes: interes.mes,
                valor: interes.valor
            };
        });

        return res.status(200).json(resultados);
    } catch (error) {
        return res.status(500).json({ message: "Error en el servidor"+error});
    }
};
