### Mongoose comparison operators
    eq - equal
    ne - not equal
    gt - greater than
    gte - greater than or equal to
    lt - less than
    lte - less than or equal to
    in - in [values]
    nin - not in [values]

#### Query with comparison ops
```js
.find({author: "André", tags: {$in: ["express","react"]}})
```

### mongoose logical operators
    .or()
    .and()

#### Query with logical ops
```js
.find().or( [{author: "André"}, {isPublished: true}] )
```

### mongoose with regular expressions
#### Query with regular expressions
`i` makes it so it becomes case-insensitive
#### Starts with..
```js
.find({ author: /^André/ })
```

#### Ends with..
```js
.find({ author: /João$/i })
```

#### Contains..
```js
.find({author: /.*And.*/i })
```

### Pagination
would go as params in URL `api/v1/courses?page=1?pageSize=10` or `api/v1/courses/1/10`

```js
const pageSize = 10
const pageNumber = 1

.find({author: "André" })
    .limit(pageNumber)
    .skip((pageNumber - 1) * pageSize) //formula for pagination
```
