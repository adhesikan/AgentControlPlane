#!/usr/bin/env bash
set -euo pipefail

if [ ! -f ".next/BUILD_ID" ]; then
  echo "No Next.js build detected; running npm run build"
  npm run build
fi

PORT=${PORT:-3000}
HOSTNAME=${HOSTNAME:-0.0.0.0}

./node_modules/.bin/next start -p "${PORT}" -H "${HOSTNAME}"
