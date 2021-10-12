CREATE TYPE status_type AS ENUM('open', 'progress', 'review', 'test');

CREATE TABLE users(
    id serial primary key,
    name varchar(150) not null,
    email varchar(150) not null,
    user_name varchar(150) not null,
    password varchar(200) not null, 
    role int null
);

CREATE TABLE cards(
    id serial primary key,
    user_id int not null references users(id),
    task varchar(100) not null,
    description text not null,
    sub_task text not null,
    file varchar(200) not null,
    filter varchar(200) null,
    status status_type not null default 'open',
    task_status varchar(5) default '100%',
    time timestamptz default current_timestamp
);




