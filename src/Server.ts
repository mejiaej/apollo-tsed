import { PlatformApplication, Configuration, Inject } from '@tsed/common';
import { GlobalAcceptMimesMiddleware } from '@tsed/platform-express';
import "@tsed/platform-express";

import * as bodyParser from 'body-parser';
import * as compress from 'compression';
import * as cookieParser from 'cookie-parser';
import * as methodOverride from 'method-override';
import * as cors from 'cors';
import '@tsed/ajv';
import '@tsed/typeorm';

const rootDir = __dirname;

@Configuration({
  rootDir,
  acceptMimes: ['application/json'],
  httpPort: process.env.PORT || 8083,
  httpsPort: false, // CHANGE
  componentsScan: [
    `${rootDir}/graphql/**/*.ts`,
  ],
  graphql: {
    server1: {
      path: '/graphql',
      buildSchemaOptions: {
        emitSchemaFile: true,
        resolvers: [],
      }
    }
  }, 
  typeorm: [
    {
      name: 'default',
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      database: process.env.POSTGRES_DB || 'apollo',
      schema: process.env.POSTGRES_SCHEMA || 'blog',
      port: 5432,
      username: process.env.POSTGRES_USER || 'user',
      password: process.env.POSTGRES_PASSWORD || 'changeme',
      entities: [`${rootDir}/entity/*{.ts,.js}`],
      // shows sql queries
      logging: process.env.NODE_ENV === 'development',
    },
  ],
  exclude: ['**/*.spec.ts'],
})
export class Server {
  @Inject()
  app: PlatformApplication;

  @Configuration()
  settings: Configuration;

  $beforeRoutesInit() {
    this.app
      .use(cors())
      .use(GlobalAcceptMimesMiddleware)
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true,
        })
      );

    return null;
  }
}
