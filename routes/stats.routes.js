const { Router } = require('express');
const Todo = require('../models/Todo');
const Category = require('../models/Category');
const router = Router();

router.post('/', async (req, res) => {
    try {
        const todo = await new Todo(req.body).save();
        res.status(201).json({ todo });
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong, try again' });
    }
});

// router.get('/', async (req, res) => {
//     try {
//         const todos = await Todo.find();
//         res.json(todos);
//     } catch (e) {
//         res.status(500).json({ message: 'Something went wrong, try again' })
//     }
// });

router.get('/:id', async (req, res) => {
    
    try {
        const todo = await Todo.findOne({_id: req.params.id} );
        res.json(todo);
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong, try again' });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const todo = await Todo.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.json(todo);
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong, try again' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        console.log(req.params)
        const todo = await Todo.findByIdAndDelete(req.params.id);
        res.json(todo);
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong, try again' });
    }
});

router.get('/stats', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
       
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong, try again' });
    }
});

module.exports = router;