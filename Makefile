install:
	npm ci

millionare:
	node bin/millionare.js

publish:
	npm publish --dry-run

lint:
	npx eslint .