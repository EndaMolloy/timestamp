
# Timestamp Microservice
### User stories:
1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (eg Oct 12, 2017
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.

## Example usage:

```
http://localhost:3000/Oct12%202017
http://localhost:3000/1507762800

```

## Example output:

```json
{
"unix": "1507762800",
"natural": "October 12, 2017"
}
```
