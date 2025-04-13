#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")"  # Ensures you're in /usr/src/app/node_backend

# Set environment variable for production
export NODE_ENV=production

# Define the cron job command
CRON_JOB="0 0 */7 * * /usr/bin/node $(pwd)/refresh.js >> /var/log/token-refresh.log 2>&1"

# Add the cron job if it doesn't already exist
( crontab -l 2>/dev/null | grep -Fv "$(echo "$CRON_JOB" | cut -d'>' -f1)" ; echo "$CRON_JOB" ) | crontab -

# Start cron service in the background
crond

