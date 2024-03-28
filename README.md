# Alert Service

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) Sample directory organization for hexagonal infrastructure. This is an example of directory organization for hexagonal infrastructure. This repository is part of a study on complex architecture for applications that use modern standards, mainly applicable to asynchronous messaging services using DDD,CQRS, EDA and SAGA.

## Installation

```bash
$ npm install
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

## Patterns used on this project

### Hexagonal Arch
Hexagonal Architecture, also known as Ports and Adapters Architecture, is a software design pattern that aims to create a highly decoupled and testable application by emphasizing the separation of concerns between the core business logic and external concerns such as databases, user interfaces, and frameworks.

The key concept in Hexagonal Architecture is the use of "ports" and "adapters" (hence the Ports/Adapters name).

Ports are interfaces that represent the entry points into the core application.

Adapters implement the interfaces (or ports) defined by the core domain. They serve as the bridge between the core application and the external concerns.
Some benefits of Hexagonal Architecture are:

- Decoupling: This architecture promotes loose coupling between the core domain and external concerns, allowing changes to occur in one area without affecting others.
- Testability: By defining clear interfaces (ports) for interactions, it becomes easier to test the core domain in isolation without relying on external systems.
- Flexibility: Hexagonal Architecture allows for the replacement or modification of external concerns (adapters) without impacting the core domain, making it more adaptable to different technology stacks.
- Isolation of Core Domain: The core domain is the focal point of the application, enabling developers to focus on expressing business logic without being influenced by external factors.
- And lastly, Domain-Centric Design: This architectural pattern encourages a strong focus on the core domain and the business rules, leading to a more expressive and maintainable domain model.

### EDA

Event-Driven Architecture (or EDA) is a software architecture pattern that revolves around events as the main driving force for communication between different components of a system. It promotes the production, detection, consumption of and reaction to events.

An event can be defined as a significant change in state, such as user actions, data updates, messages from external services, or errors.

Event Driven Architecture typically consists of three main components:

Event producers, event consumers, and an event bus (aka event broker).

- Event producers are responsible for publishing events to the event bus. They act as the source of events.
- Event consumers subscribe to events from the event bus. They act as the sink of events.
- The event bus is a communication channel that connects event producers and event consumers.
  - An event bus acts as a message broker that receives events from producers and distributes them to consumers. It can be a  message queue, a centralized event service, or a message broker.

### CQRS

Command Query Responsibility Segregation (or shorthand CQRS) is a software architectural pattern that separates the concerns of reading data (queries) and writing data (commands) into separate models.

The core idea behind CQRS is to have different models and approaches for handling read operations and write operations in a system, rather than combining them into a single model.

### DDD

Domain Driven Design (also known as DDD) is a software development technique that concentrates on the domain model and domain logic.

As Eric Evans puts it in his book, "Domain-Driven Design: Tackling Complexity in the Heart of Software": the structure and language of the code should match that of the business domain. This concept is called the "Ubiquitous Language".

Fundamentally, DDD is about creating a language that connects the implementation to the business experts and their knowledge, so essentially words and phrases from the domain are directly used in the codebase. Therefore, we can use this language to construct a rich model of our domain, describing all the objects and interactions between them using a language that is understood by both the business experts and the developers.
