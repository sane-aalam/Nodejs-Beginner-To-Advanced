// CREATE DATABASE STUDENT;
// SELECT * FROM STUDENT WHERE age > 20;

users = [
  {
    _id: 1,
    name: "Rahul",
    age: 22,
  },
  {
    _id: 2,
    name: "Anita",
    age: 25,
  },
];

// db.users.find({ age: { $gt: 20 } })
// In MongoDB, we write in JSON format only but behind the scene data is stored
// in BSON (Binary JSON) format, a binary representation of JSON.
// By utilizing BSON, MongoDB can achieve higher read and write speeds,
// reduced storage requirements, and improved data manipulation capabilities,
// making it well-suited for handling large and complex datasets while
// maintaining performance efficiency.

// Flexible Schema
// Design
// • MongoDB allows dynamic,
// schema-less
// data structures.
// • Easily accommodate
// changing data
// requirements.
// Scalability and
// Performance
// • Horizontal scaling supports
// large datasets
// and high traffic.
// • Optimized read and write
// operations for
// fast
// performance.
// DocumentOriented Storage
// •Data is stored in flexible, JSONlike BSON
// documents.
// • Self-contained units with rich
// data types and
// nested arrays.
// Dynamic Queries
// • Rich query language with
// support for
// complex
// queries.
// • Utilize indexes to speed up query
// execution.
// Aggregation
// Framework
// • Perform advanced data
// transformations
// and analysis.
// • Process data using multiple
// pipeline stages.
// Open Source and
// Community
// • MongoDB is open-source
// with a vibrant
