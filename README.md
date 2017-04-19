No thrills express app boilerplate. Kept as simple as possible for ease of use. 

Clone with the following command:

```
git clone git@github.com:jcarpenter12/no_thrills_express_template_es6
```

To run locally enter the following:

```
npm start
```

If you have the heroku cli installed you can deploy this web app with the following

```
heroku create my_application_name

git push heroku master

```

At the bottom of the log there should be something along the lines of 

'https://my_application_name.herokuapp.com/'

Check the application is running

```
heroku ps:scale web=1
```

This should return something like 'Scaling dynos... done, now running web at 1:Free'

To open the application either enter 

```
heroku open
```

or go to the 'https://my_application_name.herokuapp.com/' url


For more information on deploying node applications to heroku see https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction






