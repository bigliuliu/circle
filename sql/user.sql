//用户表
CREATE TABLE USER(
user_id INT NOT NULL AUTO_INCREMENT,
nickname VARCHAR(30) NOT NULL UNIQUE,
avatar VARCHAR(100),
user_level VARCHAR(20),
user_score INT NOT NULL,
register_date DATE NOT NULL,
PRIMARY KEY ( user_id )
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

//三方绑定表
CREATE TABLE USER_AUTHS(
id INT NOT NULL AUTO_INCREMENT,
user_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES USER(user_id) ON DELETE CASCADE,
identity_type VARCHAR(20) NOT NULL,
identifier VARCHAR(50) NOT NULL UNIQUE,
password VARCHAR(30),
is_third TINYINT(1) NOT NULL,
PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=utf8;

//插入USER
INSERT INTO USER (nickname, avatar, register_date) VALUES (?, ?, ?);
INSERT INTO USER_AUTHS (user_id, identifier, password, is_third) VALUES (?,?,?,?,?)
//用户查找
SELECT (SELECT user_id FROM USER_AUTHS WHERE identity_type = ? AND identifier = ? AND password = ?)
SELECT nickname,avatar FROM USER WHERE user_id = ?

//用户关系表
CREATE TABLE USER_RELATIONSHIP(
id INT NOT NULL AUTO_INCREMENT,
my_id INT NOT NULL,
u_id INT NOT NULL,
FOREIGN KEY (my_id) REFERENCES USER(user_id) ON DELETE CASCADE,
FOREIGN KEY (u_id) REFERENCES USER(user_id) ON DELETE CASCADE,
relationship_type TINYINT(1) NOT NULL,
UNIQUE (my_id, u_id),
PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=utf8;
