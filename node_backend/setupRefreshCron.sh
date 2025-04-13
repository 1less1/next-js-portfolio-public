#!/bin/bash

# Ensure that the refresh.js file is executable
chmod +x /usr/src/app/node_backend/refresh.js

# Set up the cron job: Run the refresh.js script every 7 days at midnight
(crontab -l ; echo "0 0 */7 * * /usr/bin/node /usr/src/app/node_backend/refresh.js") | crontab -

# Start cron service in the background
crond -f &
