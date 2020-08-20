# SURVEYOR

## [Production](https://nimble-surveyor.herokuapp.com/) || [Staging](https://nimble-surveyor-staging.herokuapp.com/)

## [Project Board](https://github.com/rafayet-monon/surveyor/projects/1)

## Usage

You will need `node` and `npm` installed globally on your machine.  Built using `node-14.6.0` and `npm-6.14.6`

Install packages
```
npm install
```

Start server
```
npm start  
```
Run test suite
```
npm test
```
Run ESlint
```
npm run lint
```
Run SASS lint
```
npm run stylelint
```

Run format code
```
npm run format
```

To visit app locally: `localhost:3000`

## Deployment
This project uses `Github Actions` for `CI/CD` and deploys to `heroku`.

It has two deployment environment - `production` & `staging`. It uses `master`
branch for `production` and `staging` branch for `staging` deployment. So this project uses
two different apps on `heroku`.

To create `heroku` apps install Heroku CLI and go to project folder to run the following commands.
Or projects can also be created in Heroku website.

For Production: 
```
heroku create production_app_name --remote production --buildpack mars/create-react-app
```

For Staging: 
```
heroku create staging_app_name --remote staging --buildpack mars/create-react-app
```

Then in Github Project Secrets configure the following secrets
```
HEROKU_API_KEY: api key from heroku account's settings
HEROKU_STAGING_APP: staging_app_name
HEROKU_PRODUCTION_APP: production_app_name
```
## License

It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

[LICENSE]: /LICENSE

## About

This project is created to complete **Web Frontend Certification Path** at [Nimble](https://nimblehq.co/).
