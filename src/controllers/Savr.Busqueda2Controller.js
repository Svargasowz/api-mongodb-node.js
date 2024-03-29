import { Intereses } from "../models/Intereses.js";

export const interesesRecaudados = async (req, res) => {
    try {
        const { fecha } = req.params;
        
        const [year, month] = fecha.split('-');
        const fechaInicio = new Date(year, month - 1, 1); 
        const fechaFin = new Date(year, month, 0);

        const interesesFuePagado = await Intereses.find({ 
            fecha: { $gte: fechaInicio, $lte: fechaFin },
            estado: 'fue pagado' 
        });

        let totalPagado = 0;

        // Calcular el total de intereses pagados
        interesesFuePagado.forEach(interes => { 
            totalPagado += interes.valor; 
        });
       
        const totalRecaudado = totalPagado;

        res.json({ 
            message: `Total recaudado para el mes ${month} del año ${year} es de: ${totalRecaudado}`
        });
    } catch (error) {
        return res.status(500).json({ message: 'Error en el sistema' + error });
    }
};
