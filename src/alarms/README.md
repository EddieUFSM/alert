## Folder Contents

The application folder will contain the application services, the adapters, handlers, and other application-specific components. Each represents the application layer. It will communicate with the data access components, message brokers, and other external systems through interfaces at all points.

The Domain folders will contain the domain modules, value objects, domain events, and other domain-specific components. Each represents the domain layer.

The infrastructure folder will contain the data access components, message brokers, and other external systems. Each represents the infrastructure layer. It will implement the interfaces defined by the application layer.

And lastly, the represents folder each contains controllers, gateways, and other API-related components. All so called interface folder. sometimes just interface.
