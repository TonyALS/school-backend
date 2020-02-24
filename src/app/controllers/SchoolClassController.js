import SchoolClass from '../models/SchoolClass';
import SchoolClassListService from '../services/SchoolClassListService';

class SchoolClassController {
  async index(req, res) {
    const classes = await SchoolClassListService.getAllClass();

    if (classes.count === 0) {
      return res.status(400).json({ error: 'Nenhuma classe encontrada' });
    }
    return res.status(200).json(classes);
  }

  async store(req, res) {
    const schoolClass = await SchoolClass.create(req.body);
    return res.json(schoolClass);
  }
}

export default new SchoolClassController();
