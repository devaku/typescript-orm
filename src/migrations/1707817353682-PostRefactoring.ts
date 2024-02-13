import { MigrationInterface, QueryRunner } from 'typeorm';

export class PostRefactoring1707817353682 implements MigrationInterface {
	async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			'ALTER TABLE `posts` CHANGE COLUMN `description` `content` VARCHAR(100) NOT NULL'
		);
	}

	async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			'ALTER TABLE `posts` CHANGE COLUMN `content` `description` VARCHAR(100) NOT NULL'
		); // reverts things made in "up" method
	}
}
