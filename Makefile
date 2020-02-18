.PHONY: flow up down build install test test-debug lint loc log

flow:
	docker-compose exec web yarn flow

up:
	docker-compose up -d

down:
	docker-compose down

build:
	docker-compose build

install:
	docker-compose run --rm web yarn

test:
	docker-compose exec web yarn test:unit $(filter-out $@,$(MAKECMDGOALS))

test-debug:
	docker-compose exec web yarn test:unit:debug $(filter-out $@,$(MAKECMDGOALS))

lint:
	docker-compose exec web yarn lint

loc:
	docker-compose exec web yarn loc

log:
	docker-compose logs -f web
