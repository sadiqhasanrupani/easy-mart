-- Inserting dummy data into users table
INSERT INTO
  users (
    username,
    email,
    password,
    address,
    phone_number,
    created_at,
    updated_at,
    img
  )
VALUES
  (
    'john_doe',
    'john@example.com',
    '$2b$12$MsxqdffMLoGGTeyLXoesiOtvUDpKrMskpnR2f2lqVv2estPEu1jhS',
    '123 Main St, City, Country',
    '+917876765654',
    NOW(),
    NOW(),
    'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D'
  ),
  (
    'jane_smith',
    'jane@example.com',
    '$2b$12$MsxqdffMLoGGTeyLXoesiOtvUDpKrMskpnR2f2lqVv2estPEu1jhS',
    '456 Elm St, City, Country',
    '+918967656787',
    NOW(),
    NOW(),
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  );

-- Inserting dummy data into product_categories table
INSERT INTO
  product_categories (name, description, created_at, updated_at)
VALUES
  (
    'Electronics',
    'Electronic devices and accessories',
    NOW(),
    NOW()
  ),
  (
    'Clothing',
    'Apparel for men, women, and children',
    NOW(),
    NOW()
  ),
  (
    'Home & Kitchen',
    'Household appliances and utensils',
    NOW(),
    NOW()
  );

-- Inserting dummy data into products table
INSERT INTO
  products (
    name,
    image,
    description,
    price,
    category_id,
    created_at,
    updated_at
  )
VALUES
  (
    'Smartphone',
    'smartphone_image.jpg',
    'Latest smartphone model with advanced features',
    '999.99',
    1,
    NOW(),
    NOW()
  ),
  (
    'Laptop',
    'laptop_image.jpg',
    'Powerful laptop for work and entertainment',
    '1499.99',
    1,
    NOW(),
    NOW()
  ),
  (
    'T-shirt',
    'tshirt_image.jpg',
    'Comfortable cotton t-shirt for everyday wear',
    '19.99',
    2,
    NOW(),
    NOW()
  ),
  (
    'Dress',
    'dress_image.jpg',
    'Elegant dress for special occasions',
    '49.99',
    2,
    NOW(),
    NOW()
  ),
  (
    'Microwave Oven',
    'microwave_image.jpg',
    'Compact microwave oven for quick meals',
    '79.99',
    3,
    NOW(),
    NOW()
  ),
  (
    'Coffee Maker',
    'coffeemaker_image.jpg',
    'Automatic coffee maker for brewing fresh coffee',
    '39.99',
    3,
    NOW(),
    NOW()
  );

-- Inserting dummy data into orders table
INSERT INTO
  orders (
    user_id,
    order_date,
    total_amount,
    created_at,
    updated_at
  )
VALUES
  (1, '2024-02-19', '1099.98', NOW(), NOW()),
  (2, '2024-02-18', '69.98', NOW(), NOW());

-- Inserting dummy data into order_items table
INSERT INTO
  order_items (
    order_id,
    product_id,
    quantity,
    price,
    created_at,
    updated_at
  )
VALUES
  (1, 1, '1', '999.99', NOW(), NOW()),
  (1, 5, '1', '79.99', NOW(), NOW()),
  (2, 3, '2', '39.98', NOW(), NOW());

-- Inserting dummy data into payments table
INSERT INTO
  payments (
    order_id,
    payment_date,
    payment_method,
    amount,
    created_at,
    updated_at
  )
VALUES
  (
    1,
    '2024-02-19',
    'Credit Card',
    '1099.98',
    NOW(),
    NOW()
  ),
  (2, '2024-02-18', 'PayPal', '69.98', NOW(), NOW());

-- Inserting dummy data into test_cases table
INSERT INTO
  test_cases (description, result, created_at, updated_at)
VALUES
  (
    'Test case for product purchase',
    'Passed',
    NOW(),
    NOW()
  ),
  (
    'Test case for user authentication',
    'Failed',
    NOW(),
    NOW()
  );