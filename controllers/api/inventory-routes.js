const router = require('express').Router();
const { Inventory, Category, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all inventory 
router.get('/', (req, res) => {
    Inventory.findAll({
        include: [
            // Include User/Category info with the models
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Category
            }
        ]
    })
    .then(dbInventoryData => res.json(dbInventoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET a single inventory item
router.get('/:id', (req, res) => {
    Inventory.findOne({
        where: {
            id: req.params.id
        },
        include: [
            // Include User/Category info with the models
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Category,
                attributes: ['category_name']
            }
        ]
    })
    .then(dbInventoryData => {
        if (!dbInventoryData) {
            res.status(404).json({ message: 'No inventory found with this id!' });
            return;
        }
        res.json(dbInventoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET inventory by category
router.get('/category/:id', (req, res) => {
    Inventory.findAll({
        where: {
            category_id: req.params.id
        },
        include: [
            // Include User/Category info with the models
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Category,
                attributes: ['category_name']
            }
        ]
    })
    .then(dbInventoryData => {
        if (!dbInventoryData) {
            res.status(404).json({ message: 'No inventory found with this category!' });
            return;
        }
        res.json(dbInventoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Create a new inventory item with post
router.post('/', withAuth, (req, res) => {
    // Expects { item_name: "Coke", quantity: 12, expiration_date: 2021-02-28, user_id: 1, category_id: 5 }
    Inventory.create({
        item_name: req.body.item_name,
        quantity: req.body.quantity,
        expiration_date: req.body.expiration_date,
        user_id: req.session.user_id,
        category_id: req.body.category_id
    })
    .then(dbInventoryData => res.json(dbInventoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Update an inventory item's name, quantity, category with put
router.put('/:id', withAuth, (req, res) => {
    // Expects { item_name: "Coke", quantity: 10, category_id: 5 }
    Inventory.update(
        {
            item_name: req.body.item_name,
            quantity: req.body.quantity,
            category_id: req.body.category_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbInventoryData => {
        if (!dbInventoryData) {
            res.status(404).json({ message: "No inventory found with this id!" });
            return;
        }
        res.json(dbInventoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Delete an inventory item
router.delete('/:id', withAuth, (req, res) => {
    Inventory.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbInventoryData => {
        if (!dbInventoryData) {
            res.status(404).json({ message: "No inventory found with this id!" });
            return;
        }
        res.json(dbInventoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;