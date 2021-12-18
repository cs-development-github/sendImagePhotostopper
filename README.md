<h1 align="center">
    <img src="https://admin.photostopper.fr/build/images/icon.36a6633e.png" alt="PhotoStopper"/>
</h1>

# PhotoStopper


# Languages

[![Site Vitrine](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://fr.reactjs.org/)
[![Site Vitrine](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/docs/getting-started)
[![Site Vitrine](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://symfony.com/)
[![Site Vitrine](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![Site Vitrine](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS/Reference)
[![Site Vitrine](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![Site Vitrine](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/documentation)
[![Site Vitrine](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
[![Site Vitrine](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)](https://dev.mysql.com/doc/)



Photostopper is not an open source platform. Sponsored by PhotoStopper

The showcase site is available at [https://photostopper.fr](https://photostopper.fr).
![stability-wip](https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg)

## Documentation

Needs
- Php <= 7.3.21
- Yarn <= 1.22.15
- Composer <=  2.1.9

To run the project follow these commands.

```
git clone https://github.com/cs-development-github/photostopperAPI.git
composer install
yarn dev
<!-- Modifier le .env ou crée .env.local --!>
php bin/console make:migration
php bin/console doctrine:migration:migrate
php bin/console c:c
```

For the .env.local

```
APP_ENV=prod
APP_SECRET=52f6e537d55f3d591916c3dba19105b5
APP_MAJOR_VERSION=1
APP_VERSION="[version]"
DATABASE_URL="mysql://[username]:[password]@127.0.0.1:3306/photostopper?serverVersion=5.7"
CORS_ALLOW_ORIGIN='^https?://(localhost|127\.0\.0\.1)(:[0-9]+)?$'
MAILER_DSN=smtp://[email]:[password]:Sm@ssl0.ovh.net:465
DATABASE_LEGACY=""
###> lexik/jwt-authentication-bundle ###
JWT_SECRET_KEY=%kernel.project_dir%/config/jwt/private.pem
JWT_PUBLIC_KEY=%kernel.project_dir%/config/jwt/public.pem
JWT_PASSPHRASE=[JWT_PASSPHRASE]
###< lexik/jwt-authentication-bundle ###
````

## Contribute

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)

The [ROADMAP](ROADMAP.md) list the planned features.

## Changelog
 - Fix similar listings session persisting

[CHANGELOG.md](CHANGELOG.md) list the relevant changes done for each release.

## Community

Stay informed on Cocorico developments on [Twitter](https://twitter.com/cocorico_rocks).

## License

Cocorico is released under the [MIT license](LICENSE).


## About Us

Cocorico is a creation of [Cocolabs](https://www.cocolabs.com/en/?utm_source=github&utm_medium=cocorico-page&utm_campaign=organic) specialist of online services sales solutions.
