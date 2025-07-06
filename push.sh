#!/bin/bash

# Read commit message with quotes support
read -p "Enter the commit message: " msg 

# Add all changes
git add .

# Fix typo in git command and properly quote the message
git commit -m "$msg"

# Get current branch name and store it
current_branch=$(git symbolic-ref --short HEAD)

# Push to current branch
git push origin "$current_branch"