import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      course_name: Yup.string()
        .required()
        .min(4),
      mec_authorization: Yup.string(),
      department_id: Yup.number(),
    });

    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'Erro de validação', messages: error.inner });
  }
};
