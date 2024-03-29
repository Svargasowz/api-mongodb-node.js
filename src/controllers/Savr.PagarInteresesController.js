import { Intereses } from "../models/Intereses.js";

export const procesarPago = async (req, res) => {
    try {
        const { idinteres } = req.params;
        const { meses } = req.body;

        const interes = await Intereses.findById(idinteres);

        if (!interes) {
            return res.status(404).json({ mensaje: "El interés con ese id no lo encontramos" });
        }

        if (interes.estado === "fue pagado") {
            return res.status(400).json({ mensaje: "Este interese ya fue pagado totalmente" });
        }

        if (meses === interes.mes) {
            interes.estado = "fue pagado";
            interes.mes = 0;
            await interes.save();
            return res.json({ mensaje: "el pago fue completado" });
        }

        if (meses < interes.mes) {

            interes.mes -= meses;
            await interes.save();
            return res.json({ mensaje:` Se le mermaron ${meses} meses del interés total `});
        }

        return res.status(400).json({ mensaje: "Estas intentando pagar mas intereses de lo que debes en realidad" });
    } catch (error) {
        return res.status(500).json({ mensaje: "Error en el servidor", error });
    }
};