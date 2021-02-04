/* Populate User table */
INSERT INTO user (username, email, password)
VALUES
    ('testuser', 'test@mail.com', 'test1234');
/* Populate Inventory table */
INSERT INTO inventory (item_name, quantity, user_id, category_id)
VALUES
    ('apple', 6, 1, 1);
/* Populate Category table */
INSERT INTO category (category_name, item_id)