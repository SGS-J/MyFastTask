# Server branch
Server made in NodeJs using mongoDb as database.
You can test it on Postman or others Api testers like it on localhost:3000/(url that you want to test).

## Testing 
<h3>Warning!</h3>

The tests are for API, so it uses the database and other dependencies used in the
project(like integration tests), ensure that you install the require dependencies and
have the database to use it, otherwise, the tests will fail.

You can run the tests using:
```bash
npm test 
# or
yarn test 
``` 