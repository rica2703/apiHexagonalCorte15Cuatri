// src/domain/models/AdminModel.ts
import mongoose, { Document } from 'mongoose';

interface AdminDocument extends Document {
  username: string;
  password: string;
}

const adminSchema = new mongoose.Schema({
  username:  String,
  password: String, 
});

const AdminModel = mongoose.model<AdminDocument>('Admin', adminSchema);

export default AdminModel;
