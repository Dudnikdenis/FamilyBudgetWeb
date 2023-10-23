create table credit( credit_id serial PRIMARY KEY, nameBank VARCHAR(15), datePayment  serial, amount VARCHAR(15));

insert into credit(credit_id, nameBank, datePayment, amount) values (1, 'ГазпромБанк', 14, '1000');

select * from credit;


create table expenses( expenses_id serial PRIMARY KEY, name_expenses VARCHAR(15), amount VARCHAR(15));

insert into expenses(expenses_id, name_expenses, amount) values (1, 'Купить машину', '1000');

select * from expenses;


create table shoppingList( shoppingList_id serial PRIMARY KEY, product_name VARCHAR(15), weight VARCHAR(15));

insert into shoppingList(shoppingList_id, product_name, product_quantity) values (1, 'Майонез', '1');

insert into shoppingList(shoppingList_id, product_name, product_quantity) values (2, 'Марковка', '1000');

SELECT * FROM shoppingList;