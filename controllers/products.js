const { isValidObjectId } = require("mongoose")
const { Product } = require("../models/product")


exports.getAll = async (req, res) => {

    try {

        const products = await Product.find().populate("category")

        res.status(200).json({
            products,
            success: true
        })

    } catch (error) {

        res.status(500).json({
            error,
            success: false
        })
        
    }

}


exports.store = async (req, res) => {

    //let {name, image, countStock} = req.body
   
    const product = new Product({
        ...req.body
    })
  
  
    try {
  
      const result = await product.save()
  
      res.status(201).json({
          product: result,
          success: true
      })
      
    } catch (error) {
  
      res.status(400).json({
          error,
          success: false
      })
    }
  
  }


  exports.getOneById = async (req, res) => {

    const { id } = req.params

    if(!isValidObjectId(id)) {
        return res.status(404).json({
            message: "invalid product id !",
            success: false
        })
    }

    try {

        const result = await Product.findById(id).populate("category")

        if(!result) {
            return res.status(404).json({
                message: "Product not found",
                success: false
            })
        }

        res.status(200).json({
            result,
            success: true
        })

    } catch (error) {

        res.status(500).json({
            error,
            success: false
        })
        
    }

}


exports.getOne = async (req, res) => {

    const { field } = req.params
    const { q } = req.query

    try {

        const result = await Product.findOne({[field]: q}).populate("category")

        if(!result) {
            return res.status(404).json({
                message: "Product not found",
                success: false
            })
        }

        res.status(200).json({
            result,
            success: true
        })

    } catch (error) {

        res.status(500).json({
            error,
            success: false
        })
        
    }

}


exports.deleteById = async (req, res) => {

    const { id } = req.params

    try {

        const result = await Product.findByIdAndDelete(id)

       
        res.status(200).json({
            result,
            success: true
        })

    } catch (error) {

        res.status(404).json({
            error,
            success: false
        })
        
    }

}


exports.update = async (req, res) => {

    const { id } = req.params

    try {

        const result = await Product.findOneAndReplace({_id: id}, req.body)

       
        res.status(200).json({
            result,
            success: true
        })

    } catch (error) {

        res.status(404).json({
            error,
            success: false
        })
        
    }

}


exports.patch = async (req, res) => {

    const { id } = req.params

    try {

        const result = await Product.findOneAndUpdate({_id: id}, req.body)

       
        res.status(200).json({
            result,
            success: true
        })

    } catch (error) {

        res.status(404).json({
            error,
            success: false
        })
        
    }

}