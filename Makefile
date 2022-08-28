MAKEFLAGS += --silent

show_file:
	cat dist/index.html | sed 's/.*src="\.\/\(.*\)".*/\1/'

launch:
	npm start

build:
	npm run build

pack:
	zip -r bundle.zip ./dist/*

rename:
	node scripts/rename.js ${name}
