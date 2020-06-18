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
![alt text](https://gist.githubusercontent.com/mejiaej/8f5181e4ccb5d8dbd3020d7113f088cc/raw/376e8ede83036406586f92943934e3521fca639a/graphql.PNG?raw=true)

## Integration tests
```batch
1. install dependencies
$ yarn install

2. docker services (postgres db)
$ docker-compose build
$ docker-compose up

3. run integration tests
$ yarn test
```

## Production setup
> **NOTE**: Graphql playground not available in production mode

```batch
1. build
$ yarn install
$ yarn build

2. docker services
$ docker-compose build
$ docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

3. graphql server ready in http://localhost:8083/graphql
```
> **NOTE**: Remember to stop docker containers if testing locally
