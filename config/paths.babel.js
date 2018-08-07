import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
export const ROOT   = path.resolve(__dirname, '..');
export const SRC    = path.resolve(ROOT, 'src');
export const DIST   = path.resolve(ROOT, 'dist');
export const ASSETS = process.env.ASSETS;
