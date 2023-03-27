dev:
	docker-compose -f docker-compose.dev.yml up -d --build
console:
	docker-compose -f docker-compose.dev.yml exec omni_dev sh
prod:
	docker-compose -f docker-compose.prod.yml up -d --build
test:
	docker-compose -f docker-compose.dev.yml exec omni_dev npm run test
