SET CHARSET UTF8;
CREATE DATABASE IF NOT EXISTS sample_database DEFAULT CHARACTER SET utf8;

CREATE TABLE IF NOT EXISTS `database`.`tickets` (
  `id` INT unsigned NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `comment` VARCHAR(255) NOT NULL,
  `insert_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted` TINYINT NOT NULL DEFAULT FALSE,
  PRIMARY KEY (`id`)
);

INSERT INTO `database`.`tickets` (
  `name`, `comment`
) VALUES (
  'test tix',
  'this tickets is test tix'
) , (
  'test tix2',
  'this tickets is test tix2'
);