# warriors-eats

## Reference
https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/

## Installation Steps

1. Install Brew if you don't already have it:
   
Instructions at https://builtin.com/articles/install-homebrew

2. Install Postgres
   
brew install postgresql

3. Run Postgres
   
scripts/db_startup.sh

4. In a new terminal window, connect to the database on the commandline to set it up:

psql postgres

5. Copy/Paste the SQL commands one by one in WarriorsEats.sql to:

- Create DB user warriors_eats.
- Create database warriors_eats.
- Connect to warriors_eats.
- Create table eateries.
- Create table reviews.

6. Install Node Package Manager, is a software package manager for the Node.js ecosystem, used to easily install, manage, and share third-party packages (also known as modules) for Node.js applications.

brew install npm

7. Install Express for the server:

npm i express pg

8. Start up server:
   
scripts/server_startup.sh

## Example API Requests

### CREATE eatery
curl --location 'http://localhost:3000/eateries'
--header 'Content-Type: application/json'
--data '{ "name": "Tim Hortons", "address": "123 Main St.", "description": "Has good coffee and donuts" }'

Eatery added with ID: 1

### CREATE review

curl --location 'http://localhost:3000/reviews'
--header 'Content-Type: application/json'
--data '{ "eatery_id": 5, "food_name": "Pizza", "score": 9, "review_text": "It was not bad", "image_data": "AKGdsjfi3ury3rbksdfgiwuew893438934" }'

Review added with ID: 4

### GET all eateries

curl --location 'http://localhost:3000/eateries'

[{"id":1,"name":"United College","address":"Foo","description":"A decent place to eat"},{"id":2,"name":"St. Jeromes","address":"Bar","description":"A so so place to eat"}]

### GET all reviews

curl --location 'http://localhost:3000/reviews'

[
    {
        "id": 5,
        "eatery_id": 6,
        "food_name": "Pizza",
        "score": 9,
        "review_text": "It was not bad",
        "image_data": {
            "type": "Buffer",
            "data": [
                65,
                75,
                71,
                100,
                115,
                106,
                102,
                105,
                51,
                117,
                114,
                121,
                51,
                114,
                98,
                107,
                115,
                100,
                102,
                103,
                105,
                119,
                117,
                101,
                119,
                56,
                57,
                51,
                52,
                51,
                56,
                57,
                51,
                52
            ]
        }
    },
    {
        "id": 6,
        "eatery_id": 6,
        "food_name": "Pizza",
        "score": 9,
        "review_text": "It was not bad",
        "image_data": {
            "type": "Buffer",
            "data": [
                65,
                75,
                71,
                100,
                115,
                106,
                102,
                105,
                51,
                117,
                114,
                121,
                51,
                114,
                98,
                107,
                115,
                100,
                102,
                103,
                105,
                119,
                117,
                101,
                119,
                56,
                57,
                51,
                52,
                51,
                56,
                57,
                51,
                52
            ]
        }
    },
    {
        "id": 7,
        "eatery_id": 6,
        "food_name": "Pizza",
        "score": 9,
        "review_text": "It was not bad",
        "image_data": {
            "type": "Buffer",
            "data": [
                65,
                75,
                71,
                100,
                115,
                106,
                102,
                105,
                51,
                117,
                114,
                121,
                51,
                114,
                98,
                107,
                115,
                100,
                102,
                103,
                105,
                119,
                117,
                101,
                119,
                56,
                57,
                51,
                52,
                51,
                56,
                57,
                51,
                52
            ]
        }
    },
    {
        "id": 8,
        "eatery_id": 6,
        "food_name": "Pizza",
        "score": 9,
        "review_text": "It was not bad",
        "image_data": {
            "type": "Buffer",
            "data": [
                65,
                75,
                71,
                100,
                115,
                106,
                102,
                105,
                51,
                117,
                114,
                121,
                51,
                114,
                98,
                107,
                115,
                100,
                102,
                103,
                105,
                119,
                117,
                101,
                119,
                56,
                57,
                51,
                52,
                51,
                56,
                57,
                51,
                52
            ]
        }
    },
    {
        "id": 9,
        "eatery_id": 6,
        "food_name": "Pizza",
        "score": 9,
        "review_text": "It was not bad",
        "image_data": {
            "type": "Buffer",
            "data": [
                65,
                75,
                71,
                100,
                115,
                106,
                102,
                105,
                51,
                117,
                114,
                121,
                51,
                114,
                98,
                107,
                115,
                100,
                102,
                103,
                105,
                119,
                117,
                101,
                119,
                56,
                57,
                51,
                52,
                51,
                56,
                57,
                51,
                52
            ]
        }
    },
    {
        "id": 10,
        "eatery_id": 6,
        "food_name": "Pizza",
        "score": 9,
        "review_text": "It was not bad",
        "image_data": {
            "type": "Buffer",
            "data": [
                65,
                75,
                71,
                100,
                115,
                106,
                102,
                105,
                51,
                117,
                114,
                121,
                51,
                114,
                98,
                107,
                115,
                100,
                102,
                103,
                105,
                119,
                117,
                101,
                119,
                56,
                57,
                51,
                52,
                51,
                56,
                57,
                51,
                52
            ]
        }
    },
    {
        "id": 11,
        "eatery_id": 6,
        "food_name": "Pizza",
        "score": 9,
        "review_text": "It was not bad",
        "image_data": {
            "type": "Buffer",
            "data": [
                65,
                75,
                71,
                100,
                115,
                106,
                102,
                105,
                51,
                117,
                114,
                121,
                51,
                114,
                98,
                107,
                115,
                100,
                102,
                103,
                105,
                119,
                117,
                101,
                119,
                56,
                57,
                51,
                52,
                51,
                56,
                57,
                51,
                52
            ]
        }
    }
]

### GET one page of eateries

curl --location 'http://localhost:3000/eateries?page_size=2&offset=6'

[
    {
        "id": 12,
        "name": "Tim Hortons",
        "address": "123 Main St.",
        "description": "Has good coffee and donuts"
    },
    {
        "id": 13,
        "name": "Tim Hortons",
        "address": "123 Main St.",
        "description": "Has good coffee and donuts"
    }
]

### GET one page of reviews

curl --location 'http://localhost:3000/reviews?page_size=2&offset=4'

[
    {
        "id": 7,
        "eatery_id": 6,
        "food_name": "Pizza",
        "score": 9,
        "review_text": "It was not bad",
        "image_data": {
            "type": "Buffer",
            "data": [
                65,
                75,
                71,
                100,
                115,
                106,
                102,
                105,
                51,
                117,
                114,
                121,
                51,
                114,
                98,
                107,
                115,
                100,
                102,
                103,
                105,
                119,
                117,
                101,
                119,
                56,
                57,
                51,
                52,
                51,
                56,
                57,
                51,
                52
            ]
        }
    },
    {
        "id": 6,
        "eatery_id": 6,
        "food_name": "Pizza",
        "score": 9,
        "review_text": "It was not bad",
        "image_data": {
            "type": "Buffer",
            "data": [
                65,
                75,
                71,
                100,
                115,
                106,
                102,
                105,
                51,
                117,
                114,
                121,
                51,
                114,
                98,
                107,
                115,
                100,
                102,
                103,
                105,
                119,
                117,
                101,
                119,
                56,
                57,
                51,
                52,
                51,
                56,
                57,
                51,
                52
            ]
        }
    }
]

### Get eatery by ID

curl --location 'http://localhost:3000/eateries/1'

[ { "id": 1, "name": "United College", "address": "Foo", "description": "A decent place to eat" } ]

### Get review by ID

curl --location 'http://localhost:3000/reviews/4'

[ { "id": 4, "eatery_id": 5, "food_name": "Pizza", "score": 9, "review_text": "It was not bad", "image_data": { "type": "Buffer", "data": [ 65, 75, 71, 100, 115, 106, 102, 105, 51, 117, 114, 121, 51, 114, 98, 107, 115, 100, 102, 103, 105, 119, 117, 101, 119, 56, 57, 51, 52, 51, 56, 57, 51, 52 ] } } ]

### UPDATE eatery

curl --location --request PUT 'http://localhost:3000/eateries/5'
--header 'Content-Type: application/json'
--data '{ "name": "Tim Hortons", "address": "123 Main St. aaa", "description": "Has good coffee and donuts" }'

Eatery modified with ID: 5

### UPDATE review

curl --location --request PUT 'http://localhost:3000/reviews/4'
--header 'Content-Type: application/json'
--data '{ "eatery_id": 5, "food_name": "Pizza", "score": 8, "review_text": "It was not bad", "image_data": "AKGdsjfi3ury3rbksdfgiwuew893438934" }'

Review modified with ID: 4

### DELETE eatery

curl --location --request DELETE 'http://localhost:3000/eateries/5'

Eatery deleted with ID: 5

### DELETE review

curl --location --request DELETE 'http://localhost:3000/reviews/4'

Review deleted with ID: 4
