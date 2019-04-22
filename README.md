# My-Favorites-App-
One frontend page (React) that communicates with the API (graphql) to retrieve list of Music Albums, Artists, and songs that are being served by the backend/API (django).


# Project Name

>  My Favorites App



1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
  

## Usage
  Clone or download the repo and run npm install, then open three terminal windows:
1. To run the Django Server: python3 manage.py runserver
2. To run the React Server: npm start
3. To Test Your Data by The Terminal: 

    $ curl \
      -X POST \
      -H "Content-Type: application/json" \
      --data '{ "query": "{ X { Y } }" }' \
      http://127.0.0.1:8000/graphql/

 

## Requirements

. Python ^3.7
. Django 2.2
. React Js
. Apollo

## Development

### Installations we need : 

 
### At The Back-end :


$ python3 -m venv env
$ pip3 install Django
$ pip3 install graphene_django 

To Create Django project:

$ django-admin.py startproject YOUR_PROJECT_NAME 

To Migrate Your Data Base: 

$ python3 manage.py makemigrations
$ python3 manage.py migrate

To Test The Data:

$ python3 manage.py loaddata NAME.json



### At The Front-end : 


To Create React App:

npx create-react-app my-app
cd my-app
npm start


npm install apollo-boost react-apollo graphql --save



 


