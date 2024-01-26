# SFU Events

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Development Setup

This project is structured with separate frontend (`client`) and backend (`server`) directories, each with its own set of dependencies.

### Concurrent Development

For convenience during development, we use `concurrently` in the root of the project to run both the frontend and backend simultaneously. This is particularly useful for full-stack development and testing.

To start both the client and server at the same time, run the following command from the root directory:

```bash
# Root Directory
npm install
npm start
```

### Managing Dependencies and Run Indendently
```bash
# Client
cd client 
npm install
npm run dev
```
```bash
# Server with 'nodemon'
cd server 
npm install
npm run dev 
```


