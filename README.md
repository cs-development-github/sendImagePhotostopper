

# Novelty Studio

## Documentation

Needs
- Php <= 7.3.21
- Yarn <= 1.22.15
- Composer <=  2.1.9

To run the project follow these commands.

```
https://github.com/cs-development-github/Template-Symfony.git
composer install
yarn dev
<!-- Modifier le .env ou crée .env.local --!>
php bin/console make:migration
php bin/console doctrine:migration:migrate
php bin/console c:c
```

Modifier aussi le docker-composer.yml
```
version: '3.5'

services:
  db:
    image: 'mysql:5.7'
    ports:
      - '3306:3306'
    environment:
      - 'MYSQL_ROOT_PASSWORD=toor'
      - 'MYSQL_DATABASE=<bdName>'
      - 'MYSQL_USER=<bdName>'
      - 'MYSQL_PASSWORD=<bdName>'
  mailhog:
    image: mailhog/mailhog
    ports:
      - '1025:1025'
      - '8025:8025'
  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    depends_on:
      - db
    environment:
      - 'MYSQL_ROOT_PASSWORD=toor'
    ports:
      - '8585:80'
```
Ensuite run la commande 

```
docker composer up -d

```
