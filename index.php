CREATE TABLE IF NOT EXISTS `players` (
  `LOGIN` text collate utf8_unicode_ci NOT NULL,
  `PASSWORD` text collate utf8_unicode_ci NOT NULL,
  `DAYS` int(11) NOT NULL auto_increment,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;
