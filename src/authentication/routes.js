import express from 'express';

const router = express.Router();

router.use('*', (req, res) => {
  res.status(404).send({
    success: false,
    message: 'Wooo! probably not the page you\'re looking for',
  });
});

export default router;