MAKEFLAGS += --silent

show_file:
	cat dist/index.html | sed 's/.*src="\.\/\(.*\)".*/\1/'
