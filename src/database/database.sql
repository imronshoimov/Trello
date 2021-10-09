CREATE TABLE users(
    id serial primary key,
    name varchar(150) not null,
    role int not null default 1
);

CREATE TABLE cards(
    id serial primary key,
    user_id int not null references users(id),
    task varchar(100) not null,
    description text not null,
    sub_task text not null,
    file varchar(200) not null,
    filter text [] not null,
    status int not null default 0
);