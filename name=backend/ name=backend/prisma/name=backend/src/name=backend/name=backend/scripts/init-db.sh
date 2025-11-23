#!/usr/bin/env bash
set -e
# Usage: ./init-db.sh
echo "Generating Prisma client..."
npx prisma generate
echo "Running migrations..."
npx prisma migrate deploy || npx prisma migrate dev --name init
echo "Seeding..."
node prisma/seed.js
echo "DB init complete."
