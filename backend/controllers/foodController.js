import foodModel from "../models/foodModel.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Add food item
const addFood = async (req, res) => {
    console.log('Received addFood request');
    console.log('Files:', req.file);
    console.log('Body:', req.body);

    try {
        // Check if file was uploaded
        if (!req.file) {
            console.log('No file uploaded');
            return res.status(400).json({ 
                success: false, 
                message: "No image file uploaded",
                details: {
                    receivedFiles: req.file,
                    receivedBody: req.body
                }
            });
        }

        // Validate required fields
        const requiredFields = ['name', 'price', 'category'];
        const missingFields = requiredFields.filter(field => !req.body[field]);
        
        if (missingFields.length > 0) {
            console.log('Missing required fields:', missingFields);
            // Remove the uploaded file if validation fails
            const filePath = path.join(__dirname, '../uploads', req.file.filename);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
                console.log('Deleted uploaded file due to validation failure');
            }
            return res.status(400).json({ 
                success: false, 
                message: "Missing required fields",
                missingFields,
                receivedData: req.body
            });
        }

        console.log('Creating new food item with data:', {
            name: req.body.name,
            description: req.body.description || "",
            price: req.body.price,
            category: req.body.category,
            image: req.file.filename
        });

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description || "",
            price: Number(req.body.price),
            category: req.body.category,
            image: req.file.filename
        });

        // Validate Mongoose model before saving
        const validationError = food.validateSync();
        if (validationError) {
            console.error('Validation error:', validationError);
            fs.unlinkSync(path.join(__dirname, '../uploads', req.file.filename));
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                error: validationError.errors
            });
        }

        const savedFood = await food.save();
        console.log('Food saved successfully:', savedFood);

        res.status(201).json({ 
            success: true, 
            message: "Food Added Successfully",
            data: savedFood
        });
        
    } catch (error) {
        console.error("Error adding food:", {
            message: error.message,
            stack: error.stack,
            name: error.name,
            ...error
        });
        
        // Clean up uploaded file if error occurs
        if (req.file) {
            try {
                const filePath = path.join(__dirname, '../uploads', req.file.filename);
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                    console.log('Cleaned up uploaded file after error');
                }
            } catch (err) {
                console.error("Error deleting uploaded file:", err);
            }
        }
        
        // Handle duplicate key errors
        if (error.name === 'MongoServerError' && error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "Duplicate entry",
                field: Object.keys(error.keyPattern)[0],
                value: Object.values(error.keyValue)[0]
            });
        }

        // Handle validation errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: Object.entries(error.errors).map(([key, value]) => ({
                    field: key,
                    message: value.message
                }))
            });
        }

        res.status(500).json({ 
            success: false, 
            message: "Internal Server Error",
            error: process.env.NODE_ENV === 'development' ? {
                message: error.message,
                stack: error.stack,
                type: error.name
            } : undefined
        });
    }
};

// All food list
const listFood = async (req, res) => {
    try {
        console.log('Fetching food list');
        const foods = await foodModel.find({}).lean();
        console.log(`Found ${foods.length} food items`);
        
        res.status(200).json({
            success: true,
            message: "Food list retrieved successfully",
            count: foods.length,
            data: foods
        });
        
    } catch (error) {
        console.error("Error fetching food list:", {
            message: error.message,
            stack: error.stack
        });
        
        res.status(500).json({
            success: false,
            message: "Failed to retrieve food list",
            error: process.env.NODE_ENV === 'development' ? {
                message: error.message,
                type: error.name
            } : undefined
        });
    }
};

// Remove food item 
const removeFood = async (req, res) => {
    console.log('Received removeFood request for ID:', req.body.id);
    
    try {
        if (!req.body.id) {
            console.log('No ID provided');
            return res.status(400).json({ 
                success: false, 
                message: "Food ID is required" 
            });
        }

        const food = await foodModel.findById(req.body.id);
        if (!food) {
            console.log('Food not found with ID:', req.body.id);
            return res.status(404).json({ 
                success: false, 
                message: "Food not found" 
            });
        }

        console.log('Found food to delete:', food);
        
        // Delete the image file
        const imagePath = path.join(__dirname, '../uploads', food.image);
        if (fs.existsSync(imagePath)) {
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error("Error deleting image:", err);
                } else {
                    console.log('Successfully deleted image:', imagePath);
                }
            });
        }

        const deletedFood = await foodModel.findByIdAndDelete(req.body.id);
        console.log('Deleted food:', deletedFood);
        
        res.json({ 
            success: true, 
            message: "Food Removed",
            data: deletedFood
        });
        
    } catch (error) {
        console.error("Error removing food:", {
            message: error.message,
            stack: error.stack,
            idAttempted: req.body.id
        });
        
        res.status(500).json({ 
            success: false, 
            message: "Error removing food",
            error: process.env.NODE_ENV === 'development' ? {
                message: error.message,
                type: error.name
            } : undefined
        });
    }
};

export { addFood, listFood, removeFood };