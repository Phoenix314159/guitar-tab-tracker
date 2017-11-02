create table songs (
       id serial,
       title varchar(255) not null,
       artist varchar(255) not null,
       genre varchar(255) not null,
       album varchar(255) not null,
       albumImage varchar(255) not null,
       youtubeId varchar(255) not null,
       lyrics varchar(10000) not null,
       tab varchar(10000) not null
   )