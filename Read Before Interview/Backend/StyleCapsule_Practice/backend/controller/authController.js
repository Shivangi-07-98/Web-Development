const auth = require ("../model/authModel");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try{
    const {name, email, username, password, contactNumber} = req.body;

    // console.log(req.body);
    const hashedPassword = await bcrypt.hash( password,10);

    const newUser = new auth({
      name,
      email,
      username,
      password: hashedPassword,
      contactNumber
    })
    await newUser.save();
    
    res.json({
      message: "signed up successfully",
      status: 200
    })
  }
  catch(error){
    res.json({
      message: error.message,
      status: 500
    })
  }
}

module.exports = {signup};