all:

get:
	curl -X GET localhost:3333/user
post:
	curl -X POST localhost:3333/user -d '{"name":"name", "email":"email", "password":"password"}' -H 'content-type:application/json'
