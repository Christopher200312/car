const chris = require("mongoose");
const userModel = require("../model/usermodel");

// get all cars

const getallcars = async (req, res) => {
  try {
    const getcars = await userModel.find();
    res.status(200).json({
      message: "gotten all cars",
      data: getcars,
    });
  } catch (error) {
    res.status(200).json({
      message: "couldn't get all car",
    });
  }
};

// create new cars

const createnewcars = async (req, res) => {
  try {
    const { brand, plateNumber, sitNumber, engineOil, color } = req.body;
    const newcars = await userModel.create({
      brand,
      plateNumber,
      sitNumber,
      engineOil,
      color,
    });
    res.status(404).json({
      message: "create new cars",
      data: newcars,
    });
  } catch (error) {
    res.status(404).json({
      message: "couldnt create new car",
    });
  }
};
