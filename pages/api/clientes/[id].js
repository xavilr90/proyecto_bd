// pages/api/clientes/[id].js
import Cliente from '../../../models/cliente';

export default async (req, res) => {
  const { method, query: { id } } = req;

  switch (method) {
    case 'GET':
      try {
        const cliente = await Cliente.findByPk(id);
        if (cliente) {
          res.status(200).json(cliente);
        } else {
          res.status(404).json({ error: 'Cliente no encontrado' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener el cliente' });
      }
      break;
    case 'PUT':
      try {
        const cliente = await Cliente.findByPk(id);
        if (cliente) {
          await cliente.update(req.body);
          res.status(200).json(cliente);
        } else {
          res.status(404).json({ error: 'Cliente no encontrado' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el cliente' });
      }
      break;
    case 'DELETE':
      try {
        const cliente = await Cliente.findByPk(id);
        if (cliente) {
          await cliente.destroy();
          res.status(200).json({ message: 'Cliente eliminado' });
        } else {
          res.status(404).json({ error: 'Cliente no encontrado' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el cliente' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Método ${method} no permitido`);
      break;
  }
};
