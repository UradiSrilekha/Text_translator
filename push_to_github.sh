#!/usr/bin/env bash
# Usage: ./push_to_github.sh <REPO_URL>
# Example: ./push_to_github.sh https://github.com/myusername/text-translator.git

REPO_URL=$1
if [ -z "$REPO_URL" ]; then
  echo "Error: Repository URL not provided."
  exit 1
fi

# Add remote and push
git remote add origin "$REPO_URL"
# If you have a Personal Access Token, you can embed it in the URL like:
# https://<TOKEN>@github.com/username/repo.git
# Otherwise you will be prompted for credentials.

git branch -M main
git push -u origin main
