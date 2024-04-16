/*
  Warnings:

  - You are about to alter the column `role` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `employee` MODIFY `role` ENUM('technicien', 'admin', 'manager', 'receptionist') NOT NULL DEFAULT 'technicien';
