import { Intereses } from "../models/Intereses.js";

export const PendientesPorPagar = async (req, res) => {
    try {
        const { idinteres } = req.params;

        const interes = await Intereses.findById(idinteres);

        if (!interes) {
            return res.status(404).json({ menssage: 'no fue posible encontrar este interes' });
        }

        if (interes.estado === 'sin pagar') {
            const { _id, mes, valor} = interes;
            return res.json({ 
                id: _id,
                estado: 'sin pagar' ,
                mes,
                valor
            });
        } else {
            return res.status(403).json({ menssage: 'este interes ya fue pagado' });
        }
    } catch (error) {
        return res.status(500).json({ menssage: 'Error en el servidor' + error });
    }
};