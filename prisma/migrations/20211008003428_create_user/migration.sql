-- CreateTable
CREATE TABLE `tweet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `texto` VARCHAR(191) NOT NULL,
    `emoji` VARCHAR(191) NOT NULL,
    `data_postagem` DATETIME(3) NOT NULL,
    `curtidas` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
