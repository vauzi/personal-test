import user from '../models/userModel.js';

export const getUser = async (req, res) => {
  try {
    const response = await user.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const showUser = async (req, res) => {
  try {
    const response = await user.findAll({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const userStore = async (req, res) => {
  try {
    await user.create(req.body);
    res.status(201).json({ message: 'User Created!' });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const userUpdate = async (req, res) => {
  try {
    await user.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: 'User Updeted!' });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const userDelete = async (req, res) => {
  try {
    await user.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: 'User Deleted!' });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
