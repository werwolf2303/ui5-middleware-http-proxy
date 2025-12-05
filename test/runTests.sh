#!/usr/bin/bash

# 1. Download large test json
if [ ! -f test.json ]; then
    curl https://raw.githubusercontent.com/json-iterator/test-data/refs/heads/master/large-file.json > test.json
fi

# 2. Link ui5-middleware-http-proxy
cd ../
sudo npm link

# 3. Use linked ui5-middleware-http-proxy
cd test
npm link ui5-middleware-http-proxy

# 4. Run backend server
(
    node Backend.js
) &
bg_pid=$!
trap "kill $bg_pid 2>/dev/null" EXIT

# 5. Run ui5 serve
ui5 serve
