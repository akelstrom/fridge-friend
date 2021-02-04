const router = require('express').Router();
const { Inventory, Category, User } = require('../../models');

// GET all inventory 
router.get('/', (req, res) => {
    Inventory.findAll({
        // Uncomment this when associations are finished!
        /* include: [
            // Include User/Category info with the models
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Category
            }
        ] */
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
        // Uncomment this when associations are finished!
        /* include: [
            // Include User/Category info with the models
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Category
            }
        ] */
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
router.get('/:category', (req, res) => {
    Inventory.findOne({
        where: {
            category_name: req.params.category
        },
        // Uncomment this when associations are finished!
        /* include: [
            // Include User/Category info with the models
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Category
            }
        ] */
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
router.post('/', (req, res) => {
    // Expects { inventory_name: "Bread" }
    Inventory.create({
        Inventory_name: req.body.Inventory_name
    })
    .then(dbInventoryData => res.json(dbInventoryData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

// Update an inventory item's name with put
router.put('/:id', (req, res) => {
    // Expects { Inventory_name: "Grains" }
    Inventory.update(
        {
            Inventory_name: req.body.Inventory_name
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
router.delete('/:id', (req, res) => {
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