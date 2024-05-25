// src/adapters/adminMongoAdapter.ts
import { AdminRepository } from '../infrastructure/repositories/adminRepository';
import { Admin } from '../domain/entities/Admin';
import AdminModel from '../domain/models/AdminModel';

export class AdminMongoAdapter implements AdminRepository {
  async findByUsername(username: string): Promise<Admin | null> {
    const admin = await AdminModel.findOne({ username }).exec();
    return admin ? { username: admin.username, password: admin.password } : null;
  }
}
