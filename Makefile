install:
	npm ci

getMillion:
	node bin/getMillion.js

publish:
	npm publish --dry-run

lint:
	npx eslint

test: 
	npx jest

test-coverage:
	npx jest --coverage
