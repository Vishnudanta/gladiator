#!/bin/bash

echo "---------- Setting up mysql ------------"
sudo apt update
sudo apt install mysql-server -y
sudo systemctl start mysql.service

# Create database
sudo mysql  --defaults-file=/etc/mysql/debian.cnf -e "DROP DATABASE IF EXISTS supplyGoodManagementDb; CREATE DATABASE supplyGoodManagementDb;"

# Change default password
sudo mysql --defaults-file=/etc/mysql/debian.cnf -e "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'hellowecp';"

sudo service mysql restart