install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
brain-nod:
	node bin/brain-nod.js
brain-progression:
	node bin/brain-progres.js
brain-prime: 
	node bin/brain-prime.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
