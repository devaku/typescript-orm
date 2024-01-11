import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class Post {
	@PrimaryGeneratedColumn()
	id: Number;

	@Column()
	userId: Number;

	@Column({
		length: 45,
	})
	description: string;

	@Column('text')
	name: string;

	@Column('double')
	views: number;
}
