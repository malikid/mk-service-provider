#!/usr/bin/env bash

set -euo pipefail

# make relative paths play nicely
cd $(dirname $0)

# install dependencies for root
rm -rf node_modules
npm install

# install dependencies for all the projects
source ./config.sh
for i in "${WEB_APP_PROJECT_LIST[@]}"; do
  pushd "$i"
  echo "Installing ${i} dependencies: ${PWD}"
  rm -rf node_modules
  npm install
  popd
done
