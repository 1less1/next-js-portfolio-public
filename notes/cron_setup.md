# Refresh Token Cron Job

## Monthly Cron Job
I want to have a Cron Job automate the refresh of my instagram user access token.  
The job will be running within the node-backend container and will execute the refresh.js script.  

1. Ensure Node.js is accessible by cron
    ```bash
    which node
    ```
