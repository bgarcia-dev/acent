'use strict'
class TestController {
  static test = async (req, res,next) => {
    try {
      console.log(process.env.ENV);
      return res.status(200).json({ status: true, message: 'works' });
    } catch (error) {
      next(error)
    }
  }

  
}

module.exports = TestController
