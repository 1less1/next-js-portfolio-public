#!/bin/bash

# Domain names
DOMAIN="onelessone.com"
WILDCARD_DOMAIN="www.onelessone.com"

# Webroot directory for Certbot challenges
WEBROOT_PATH="/var/www/certbot"

# Ensure the webroot directory exists
mkdir -p $WEBROOT_PATH

# Start Nginx in the background so Certbot can validate
nginx &

# Wait a few seconds to ensure Nginx is fully started
sleep 5

# Check if certificates already exist
if [ ! -d "/etc/letsencrypt/live/$DOMAIN" ]; then
    echo "Obtaining SSL certificates for $DOMAIN and $WILDCARD_DOMAIN..."
    
    certbot certonly --webroot -w $WEBROOT_PATH \
        -d $DOMAIN -d $WILDCARD_DOMAIN \
        --email toastyfr3sh@gmail.com --agree-tos --no-eff-email --non-interactive
    
    echo "SSL certificates obtained!"
else
    echo "SSL certificates already exist. Skipping certificate request."
fi

# Set up auto-renewal
echo "0 3 * * * certbot renew --quiet && nginx -s reload" > /etc/crontab
crontab /etc/crontab

# Start cron in the background
cron

# Keep Nginx running in the foreground
nginx -g "daemon off;"
