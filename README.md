# To run the project
If you have installed Docker in ypour PC then follow the 
1. Clone the repository
2. Go to project directory
3. Run `docker-compose up -d --build` ( For production `docker-compose -f docker-compose.prod.yml up -d --build`)
4. In browser go to `localhost:3001`

If Docker isn't installed then

1. Clone the repository
2. Go to project directory
3. Run `npm install`
4. Run `npm start`
5. In browser go to `localhost:3000`