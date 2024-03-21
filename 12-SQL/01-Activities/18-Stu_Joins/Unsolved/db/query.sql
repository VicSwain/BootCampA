-- Add your code below and execute file in the PostgreSQL Shell --
SELECT *
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id;

JOIN favorite_books.book_name ON book



SELECT book_name FROM favorite_books
JOIN book_prices.price ON favorite_books.book_price = book_prices.id; 