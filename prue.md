#  🎮👾 Swiss Games Garden

Swiss Games Garden API project is based on 💦 [Drupal](https://drupal.org/), 🕸 [Json:API](https://jsonapi.org/) and 🥃 [Gin](https://github.com/EasyCorp/EasyAdminBundle) as Admin UI.

We built it around 🔍 [Elasticsearch](https://www.elastic.co/) to expose Search Engine capabilities.

It uses 🐳 [Docker](http://docker.com/) for running.

We use 📝 [Swagger](https://swagger.io/) for documentation and ✅ [PHPUnit](https://phpunit.de/)/[Behat](https://docs.behat.org) for testing.

We deploy with 🚀 [Capistrano](https://github.com/capistrano/capistrano) and mange our dependencies with 🎶 [Composer](https://getcomposer.org/) & 🏜 [Phive](https://phar.io/).

| Build Status | Swagger | Issues | Activity |
|:-------------------:|:----------------:|:----------------:|:----------------:|
| [![Continuous Integration & Continuous Deployment](https://github.com/Games-of-Switzerland/api.swissgamesgarden/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/Games-of-Switzerland/api.swissgamesgarden/actions/workflows/ci-cd.yml) | [![Swagger](https://img.shields.io/badge/documentation-swagger-blue)](https://api.swissgames.garden/swagger) | ![GitHub issues](https://img.shields.io/github/issues/Games-of-Switzerland/swissgamesgarden?style=flat-square) | ![GitHub last commit](https://img.shields.io/github/last-commit/Games-of-Switzerland/swissgamesgarden?style=flat-square) |

## 🔧 Prerequisites

First of all, you need to have the following tools installed globally on your environment:

* docker
* composer
* drush
* phive

don't forget to add bins to your path such:

* php

## 🐳 Docker Install

### Project setup

Explain how to setup the project in order to have an up-and-running instance locally.

### Project bootstrap

Explain how to bootstrap the projec with fake data.

### Project configuration

Once the project up and running via Docker, you may need to setup some configurations in the `.env`.

## 🚔 Static Analyzers

If you have some Static Analyzer, list them.

## 🚀 Deploy

## 🔍 Search Engine

Your project use a specific tool such as a Search Engine (Solr, Elasticsearch, ...).
Then explain this tool and it's integration.

## 📋 Documentations

Explain other extra documentation you may use (Swagger, Insomnia, ...)

## 🚑 Troubleshootings

Most of the project have "common" issue that most newcommers may face (Elasticsearch server can't be reached, Storage full, ...).

Having a commong troubleshooting section will help you reduce friction.

## 🏆 Tests

Explain how tests should be launched.

1. PHPUnit tests must be run on the `test` container with the following cmd:

```bash
docker-compose exec test phpunit
```

## 💻 Commands

Does your project expose some CLI Command ?

## 🕙 Crons

Crons are often only configured on staging/production server. Don't forget to document them.

```
## Every 5 minutes
*/5 * * * * root /var/www/docker/cron.sh 2>&1
```

## 📢 RSS

Does your project expose any RSS Feed ? List them here then.

## 📈 Monitoring

Explain here the used solution for Monitoring the project (New Relic, Sentry, ...).

## Authors & Maintainers

Here will be listed people contributing to the project.

👨‍💻 **Kevin Wenger**

* Twitter: [@wengerk](https://twitter.com/wengerk)
* Github: [@wengerk](https://github.com/wengerk)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/acme/my-project/issues).