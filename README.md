# How to run this boilerplate
> A tutorial on how to create mongodb and cloudinary > accounts, install dependencies and run the project.

## 1. Install dependencies
Run `yarn install` or `npm install` on both client and server folders, this command will install the project's dependencies.

## 2. Create MongoDB cluster and get the url
1. If you don't have one, [create a mongodb account](https://www.mongodb.com/cloud), then create the cluster for this project.

2. On the cluster's screen, go to **Database Access > Database Users > Add New Database User**, then create the user (remember the username and password, we're going to need them later).

3. Now go to **Network Access > Ip Whitelist > Add IP Adress > Current Ip Adress**, to add your current ip address to the cluster's whitelist, you will need to do this with every source that will access your database.

4. The mongo url will be:

    mongodb://[USER]:[PASSWORD]@[SHARD_URL]/[DB_NAME]?ssl=true&replicaSet=[SHARD_NAME]&authSource=admin&retryWrites=true&w=majority

## 3. Create cloudinary account
1. Go to [cloudinary images website](https://cloudinary.com/) and create an account.

2. Under the **Account Details** section is a url named **API environment variable** this is your cloudinary url.

## 4. Create a env file
Create a file named `.env` and, inside of it, place this:

    PORT=[PORT]
    MONGO_URI=[MONGO_URI]
    COOKIE_SECRET=[COOKIE_SECRET]
    CLOUDINARY_URL=[CLOUDINARY_URL]

Where:
- [PORT] is which port you want the server to run on (usually 3001)
- [MONGO_URI] is the uri you got from [step 2.3](##-2.-create-mongodb-cluster-and-get-the-url)
- [COOKIE_SECRET] is a random string used for authentication on the admin.
- [CLOUDINARY_URL] is the url you got from [step 3.2](##3.-create-cloudinary-account)

## 5. Running in development
To run this project in development mode, we will need to run two servers, the react one on `/client` and keystone on `/server`.

The command to run react is `yarn start` or `npm start` depending on which tool was used on [installation](##1.-install-dependencies), the react server will run on port `3000` by default.

Before running the keystone server, go to `/server/updates/0.0.1-admin.js` and change the admin user as you want, this user will be the first created, but you will be able to create others and delete this one later.

To run keystoneJS server, use the command `node index.js`, the server will run on whatever port is in the variale in the env file, you will find the admin interface in `http://localhost:[PORT]/admin`

## 6. Running in production
To run the server in production, go to `/client` and run the command `yarn server`, this command will create a `react production optimized build` and move it to `/server`.

Then go to `/server` and run `node index.js`, you will find the project on `http://localhost:[PORT]`

- - -

#### Developed by [Jorrmungandr](https://github.com/Jorrmungandr)

This boilerplate was meant to be used in [CITi's](https://github.com/CITi-UFPE) selective process on 2020.1, to help the development of onepage websites.

- - -
