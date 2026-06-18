#!/usr/bin/env bash
# Initialize git repository, ensure .gitignore exists, and make initial commit

# Create .gitignore if missing (already created above)
if [ ! -f .gitignore ]; then
  cat <<'EOF' > .gitignore
node_modules/
/dist/
.env
.env.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.DS_Store
Thumbs.db
.vscode/
.idea/
EOF
fi

# Initialize git repository
git init
git add .
git commit -m "Initial commit – project setup"
