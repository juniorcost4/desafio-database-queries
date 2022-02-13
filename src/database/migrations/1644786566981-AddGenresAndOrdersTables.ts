import { MigrationInterface, QueryRunner } from "typeorm";

export class AddGenresAndOrdersTables1644786566981 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "genres" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, CONSTRAINT "PK_GENRES" PRIMARY KEY ("id"))'
    );

    await queryRunner.query(
      'CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "total" NUMERIC, CONSTRAINT "PK_ORDERS" PRIMARY KEY ("id"))'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "genres"');
    await queryRunner.query('DROP TABLE "orders"');
  }

}
