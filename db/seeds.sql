/* Populate User table */
INSERT INTO user (username, email, password)
VALUES
    ('testuser', 'test@mail.com', 'test1234');
/* Populate Category table */
INSERT INTO category (category_name)
VALUES
    ('Fruits'),
    ('Veggies'),
    ('Meat & Seafood'),
    ('Dairy & Eggs'),
    ('Drinks'),
    ('Condiments'),
    ('Miscellaneous');
/* Populate Inventory table */
INSERT INTO inventory (item_name, quantity, expiration_date, user_id, category_id)
VALUES
    ('apple', 6, null, 1, 1),
    ('mozzarella', 1, '2021-02-28', 1, 4),
    ('broccoli', 2, '2021-02-28', 1, 2),
    ('Ginger Ale', 6, null, 1, 5),
    ('soy sauce', 3, '2021-02-28', 1, 6),
    ('mayonaisse', 1, '2021-02-28', 1, 6),
    ('french onion dip', 1, '2021-02-28', 1, 7),
    ('chicken breasts', 1, '2021-02-28', 1, 3),
    ('tuna fillets', 2, '2021-02-28', 1, 3),
    ('tortillas', 3, '2021-02-28', 1, 7);