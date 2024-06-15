// pages/api/clientes/index.js
import Cliente from '../../../models/cliente';

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const clientes = await Cliente.findAll();
        res.status(200).json(clientes);
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener los clientes' });
      }
      break;
    case 'POST':
      try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);
      } catch (error) {
        res.status(500).json({ error: 'Error al crear el cliente' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Método ${method} no permitido`);
      break;
  }
};
