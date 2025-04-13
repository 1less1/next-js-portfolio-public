# Setup
This page will contain steps that must be **manually** completed to get the production environment ready for secure deployment!

## VPS Setup

### UFW
1. Install ufw:
    ```bash
    sudo apt update
    sudo apt upgrade
    sudo apt install ufw
    ```

2. Enable ufw:
    ```bash
    sudo ufw enable
    sudo ufw status
    sudo ufw reload # Refresh Firewall
    ```

3. Enable Port 80 and 443 for Web Server:
    ```bash
    sudo ufw allow 80/tcp
    sudo ufw allow 443/tcp
    sudo ufw reload
    sudo ufw status numbered
    ```

### SSH Configuration
1. Edit SSH Configuration File:
    ```bash
    sudo nano /etc/ssh/sshd_config
    ```

2. Find the Port Number line within **sshd_config**:
    ```bash
    #Port 22
    ```

3. Uncomment and Change the Port to a number between 1024 and 65535.

4. Find the PermitRootLogin line:
    ```bash
    PermitRootLogin yes
    ```

5. Change "yes" to "no":
    ```bash
    PermitRootLogin no
    ```

6. Allow the new port in your Firewall:
    ```bash
    sudo ufw allow <new-port>/tcp
    sudo ufw reload
    sudo ufw status numbered # See Current Firewall Rules
    ```

7. Restart SSH Service to apply changes:
    ```bash
    sudo systemctl restart ssh
    ```

8. Test SSH **BEFORE** logging out:
    ```bash
    ssh -p <port> your-username@your-server-ip
    ```

9. Disable Port 22 (Old SSH Port) in your Firewall:
    ```bash
    sudo ufw deny 22/tcp
    sudo ufw reload
    sudo ufw status numbered # See Current Firewall Rules
    ```

### Fail2Ban
1. Initial Setup:
    ```bash
    sudo apt install fail2ban
    sudo systemctl start fail2ban
    sudo systemctl enable fail2ban
    sudo systemctl status fail2ban # Check Service Status
    ```

2. Configuration:
    - Create local fail2band config file
        ```bash
        # The default configuration file is located at /etc/fail2ban/jail.conf, but you should avoid editing this file directly to prevent losing changes during updates.
        sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
        ```
    - Edit the local file's **[sshd]** section
        ```bash
        sudo nano /etc/fail2ban/jail.local
        ```

        Sample jail.local File
        ```ini
        [sshd]
        enabled = true
        port = <your-ssh-port>
        mode = ddos
        logpath = /var/log/auth.log
        maxretry = 5
        bantime = 3600
        findtime = 300
        ```

3. Restart the Service:
    ```bash
    sudo systemctl restart fail2ban
    sudo fail2ban-client status # check service status 
    sudo fail2ban-client status sshd # check jail status
    ```

Unban IPs:
```bash
sudo fail2ban-client set sshd unbanip <IP_ADDRESS>
```

### Docker
1. Install Docker:
    ```bash
    # Update Package List
    sudo apt updatedocker --version


    # Install Dependencies
    sudo apt install apt-transport-https ca-certificates curl software-properties-common

    # Add Docker's official GPG key
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

    # Setup Docker Repository
    echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

    # Update Package List Againdocker --version

    sudo apt update

    # Install Docker Engine
    sudo apt install docker-ce docker-ce-cli containerd.io

    # Start and Enable Docker
    sudo systemctl start docker
    sudo systemctl enable docker
    ```

2. Verify Install and Test:
    ```bash
    # Verify Install
    sudo docker --version

    # Test Docker
    sudo docker run hello-world
    docker --version
    ```

3. Give current **user** Docker Permissions:
    ``` bash
    # Let the current user run docker commands without sudo
    sudo usermod -aG docker $USER

    # Make group changes
    newgrp docker

    # Test Privileges
    docker --version
    ```

### Fetch and Store Instagram API Token
1. Power on **local** Docker instance of the website and get Instagram API Token from /auth endpoint
2. Go to server and spin up **production** Docker instance
3. Get container **db** name
    ```bash
    docker ps
    ```
4. Access DB Container
    ```bash
    docker exec -it <db-container-name> mysql -u <username> -p
    ```
5. Insert token into DB
    ```bash
    USE portfolio;
    INSERT INTO tokens (token, expiration_time, expiration_date) VALUES ('?', ?, '?');
    ```


### Website Checklist:
1. Copy over **.env** file from dev computer
2. Make a local docker instance (on dev computer) of the container cluster and then fetch a **long lived access token** for Meta
3. Save long lived access token **manually** in MySQL container on VPS  
4. Adjust letsencrypt/acme.json permissions
    ```bash
    chmod 600 ./letsencrypt/acme.json
    ```
5. Adjust DNS and Proxy settings on Cloudflare
    - This is a good [RESOURCE](https://support.hostinger.com/en/articles/1583227-how-to-point-a-domain-to-your-vps)