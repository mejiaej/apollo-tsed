# apollo-tsed
> **Important!** Ts.ED requires Node >= 10, Express >= 4 and TypeScript >= 3.

Example project using Ts.ED framework, Apollo GraphQL and TypeOrm

See [Ts.ED](https://tsed.io) project for more information.

## Development setup

```batch
1. install dependencies
$ yarn install

2. docker services (postgres db)
$ docker-compose build
$ docker-compose up

3. serve
$ yarn start

4. Go to http://localhost:8083/graphql
```



## Production setup
> **NOTE**: Graphql playground not available in production mode

```batch
1. build
$ yarn build

2. docker services
$ docker-compose build
$ docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

3. graphql server ready in http://localhost:8083/graphql
```
