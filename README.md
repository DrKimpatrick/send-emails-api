# Send-emails-api - A platform used to send emails

## Vision

This API can be used to send emails to users

---

## API Spec

### Endpoint `https://send-email-api.herokuapp.com/send` method: `post`

### Request

The preferred JSON object to send to the API should be structured as follows:

##### Note: All fields are required except fromEmail

##### if fromEmail is not provided the app uses a default email = 'resumecvportfolio@gmail.com'

#### You should permit less secure apps to send emails 4 the case of the fromEmail

```source-json
{
    "toEmail": "test@example.com", // required
    "fromEmail": "test@example.com", // optional
    "name": "name of recipient ",  // required
    "subject": "subject of the email",  // required
    "body": "email body"  // required
}
```

#### Response

The preferred JSON object to be returned by the API should be structured as follows:

#### success "code": 1

```source-json
{
  "code": 1,
  "status": 200,
  "message": "successfully sent email"
}
```

#### failure "code": 0

##### 1: server error

```source-json
{
  "code": 0,
  "status": 500,
  "message": "Unable to send email, please try again"
}
```

##### 2: Missing or invalid fields

```source-json
{
    "data": [
        {
            "field": "body",
            "msg": "Body is required"
        },
        {
            "field": "name",
            "msg": "Body is required"
        },
        {
            "field": "subject",
            "msg": "Body is required"
        },
        {
            "field": "toEmail",
            "msg": "Please enter a valid email"
        },
        {
            "field": "toEmail",
            "msg": "Please enter a valid email"
        },
        {
            "field": "fromEmail",
            "msg": "Please enter a valid email"
        },
    ],
    "code": 0,
    "status": 400,
}
```
