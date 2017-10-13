create table Users(
    ID  serial primary key,
    firstname varchar(255),
    lastname varchar(255),
    email varchar(255),
    username varchar(255),
    password varchar(255)
);


select table1.orderID, table2.customerName
from table1
inner join table2 on table1.customerId = table2.customerId