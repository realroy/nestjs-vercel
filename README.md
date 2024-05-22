# Techflow Nest.js Template

# Table of contents

- [Description](#description)
- [Pre-requisites](#pre-requisites)
- [Installation](#installation)
- [Running the app](#running-the-app)
- [Test](#test)
- [Project structure](#project-structure)
- [How to add env](#how-to-add-env)

## Description

Template Nest.js by Techflow Team

## Pre-requisites

- node.js >= 20.11.00

## Installation

```bash
# (optional) nvm use node version
$ nvm use

# install dependencies
$ npm install

# Make your own env file
$ cp .env.example .env
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Project structure

- common (Shared)
- config (Configurations)
- core (Core modules)
- modules (Feature modules)

## How to add env

1. Add new env in .env.example and .env
2. (Optional) Add new env in config/env.configuration.ts if your want to parse or set default value
3. Add new env in config/env.validation.ts
