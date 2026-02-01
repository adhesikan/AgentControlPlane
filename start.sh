#!/usr/bin/env bash
set -euo pipefail

if [ ! -f ".next/BUILD_ID" ]; then
  echo "No Next.js build detected; running npm run build"
  npm run build
fi

./node_modules/.bin/next start
