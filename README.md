# starter-node-rocketseat

Dependencies:
1. Express (Routes)
2. Mongoose (ORM)
3. Require Dir (Import schemas)
4. Nodemon (Auto refresh)
5. Robomongo (Access localhost:3001 to create database nodeapi)
6. Mongoose Paginate
7. CORS (Access application)

Install image Mongo using Docker:
docker pull mongo*

Up container
docker run --name mongodb -p 27017:27017 -d mongo*

Check container running | check all
docker ps | docker ps -a

Run project with:
npm run start
