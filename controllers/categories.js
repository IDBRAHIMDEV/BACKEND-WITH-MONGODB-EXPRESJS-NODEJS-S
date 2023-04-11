

const { Category } = require("../models/category")


exports.getAll = async (req, res) => {

    try {

        const categories = await Category.find()

        res.status(200).json({
            categories,
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

    let {name, icon, color} = req.body
   
    const category = new Category({
      name,
      icon,
      color
    })
  
  
    try {
  
      const result = await category.save()
  
      res.status(201).json({
          category: result,
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

    try {

        const category = await Category.findById(id)

        res.status(200).json({
            category,
            success: true
        })

    } catch (error) {

        res.status(404).json({
            error,
            success: false
        })
        
    }

}


exports.getOne = async (req, res) => {

    const { field } = req.params
    const { q } = req.query

    try {

        const category = await Category.findOne({[field]: q})

        res.status(200).json({
            category,
            success: true
        })

    } catch (error) {

        res.status(404).json({
            error,
            success: false
        })
        
    }

}


exports.deleteById = async (req, res) => {

    const { id } = req.params

    try {

        const result = await Category.findByIdAndDelete(id)

       
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

        const result = await Category.findOneAndReplace({_id: id},req.body)

       
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

        const result = await Category.findOneAndUpdate({_id: id}, req.body)

       
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