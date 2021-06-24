---
title: Database Families
short_description: 
  To properly choose a database we will first need to familiarize ourselves with the different types and families of the databases
description: 
  To properly choose a database we will first need to familiarize ourselves with the different types and families of the databases
bg_img: https://github.com/ywarezk/academeez/raw/main/libs/courses/03_javascript/bg.png
slug: database-families
link: /courses/node/working-with-databases/choosing-database/database-families
video_url: "https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8"
duration: 66
---

When you create your backend app, there will be a moment where you will say:   
"I need to store data and query that data, should probably use a database".  
After thinking that, the next thought will probably be:  
"What database should I choose?"  
When you look at the variety of choices, you will be overwhelmed from the amount of choices. There are simply a lot of db options you can choose from, and the abundance of choices often leave the developer confused.  
Understanding the different database families we have will help us choose the right database for the right job.

## Relational Databases

Among this family we have some of the most popular databases like:  
[Postgres](https://www.postgresql.org/), [MySQL](https://www.mysql.com/), [Oracle](https://www.oracle.com/database/), and more.  
The popular choices from this family are very reliable and some of them date back to the late 70's which makes them the oldest player in the game.  
From this family there are open source free databases like: Postgres and MySQL and there are paid license databases like Orcale, and Microsoft SQL Server.  
Our data is stored in tables in the database, those tables are strictly structured where every column in a table can store specific type. The databases here are based on SQL as the query language, and the databases support complex queries and advanced features.

## NoSQL Databases

Among this family the popular ones are:  
[MongoDB](https://www.mongodb.com/), [CouchDB](https://couchdb.apache.org/), [DynamoDB](https://aws.amazon.com/dynamodb/)  

Those databases store the data in documents where each document is sort of json structure object with key and values. The documents are placed in collections, you can think of collection being equivalent to tables in relational databases and document is equivalent to row in a table. Each document has a dynamic structure and there is no schema you have to follow in your documents like in relational databases. The query language is not based on SQL, hence the name NoSQL and in most cases the query language is Javascript based and easy to learn and understand.

## Other families

The world of database has a few other families which we will not focus in the following lesson. Among them we have the Memory based storage where the popular ones are: [Redis](https://redis.io/), and [Memcached](https://memcached.org/) which have specific usage of holding in memory some data for fast retrieval.  
Also we have another family of Graph databases, which are relatively new and not so popular, among them the popular one is [Neo4J](https://neo4j.com/).  
We will have a lesson on memory databases and we will not focus on them in the following lesson, their usage is for specific cases and usually they come in addition to relational or non relational databases.
