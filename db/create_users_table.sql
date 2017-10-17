CREATE TABLE users(
    id serial primary key,
    firstname varchar(255) not null ,
    lastname varchar(255) not null,
    email varchar(255) not null,
    username varchar(255) not null,
    password varchar(255) not null
);


