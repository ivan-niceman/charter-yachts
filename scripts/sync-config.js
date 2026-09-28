import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const envPath = path.join(rootDir, '.env');
const configJsonPath = path.join(rootDir, 'public', 'config.json');

// 1. Сначала читаем существующий config.json (чтобы ничего случайно не стереть)
let existingConfig = {};
if (fs.existsSync(configJsonPath)) {
  try {
    existingConfig = JSON.parse(fs.readFileSync(configJsonPath, 'utf-8'));
  } catch (e) {}
}

// 2. Парсим .env
function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, 'utf-8');
  const result = {};
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx !== -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      let val = trimmed.slice(eqIdx + 1).trim();
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      result[key] = val;
    }
  }
  return result;
}

const envVars = parseEnvFile(envPath);

// 3. Формируем конфиг: приоритет у .env, если там пусто — сохраняем текущий config.json, никаких захардкоженных ключей!
const configData = {
  PUBLIC_GOOGLE_PUBLISHED_KEY:
    process.env.PUBLIC_GOOGLE_PUBLISHED_KEY ||
    envVars.PUBLIC_GOOGLE_PUBLISHED_KEY ||
    existingConfig.PUBLIC_GOOGLE_PUBLISHED_KEY ||
    '',
  PUBLIC_GOOGLE_REGIONS_GID:
    process.env.PUBLIC_GOOGLE_REGIONS_GID ||
    envVars.PUBLIC_GOOGLE_REGIONS_GID ||
    existingConfig.PUBLIC_GOOGLE_REGIONS_GID ||
    '0',
  PUBLIC_GOOGLE_GENERAL_GID:
    process.env.PUBLIC_GOOGLE_GENERAL_GID ||
    envVars.PUBLIC_GOOGLE_GENERAL_GID ||
    existingConfig.PUBLIC_GOOGLE_GENERAL_GID ||
    '',
  PUBLIC_GOOGLE_REVIEWS_GID:
    process.env.PUBLIC_GOOGLE_REVIEWS_GID ||
    envVars.PUBLIC_GOOGLE_REVIEWS_GID ||
    existingConfig.PUBLIC_GOOGLE_REVIEWS_GID ||
    '',
  PUBLIC_BOOKING_ENDPOINT:
    process.env.PUBLIC_BOOKING_ENDPOINT ||
    envVars.PUBLIC_BOOKING_ENDPOINT ||
    existingConfig.PUBLIC_BOOKING_ENDPOINT ||
    '/booking.php',
  updatedAt: new Date().toISOString(),
};

fs.mkdirSync(path.dirname(configJsonPath), { recursive: true });
fs.writeFileSync(
  configJsonPath,
  JSON.stringify(configData, null, 2) + '\n',
  'utf-8',
);
console.log('✓ public/config.json synced successfully');
