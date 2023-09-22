type Post = {
  
    "userId": number,
    "id": number,
    "title": string,
    "body": string
  
}

type User = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": {
        "lat": string,
        "lng": string
      }
    },
    "phone": string,
    "website": string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
    }
  }

  type MyUsers = {
    "id": number,
    "first_name": string,
    "last_name": string,
    "age": string,
    "email": string,
    "password": string,
    "user_name": string,
    "is_admin": number
  }