update products
set name= ${name}, price= ${price}, img= ${img}
where products.id = ${id};

select * from products;
 