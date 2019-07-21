clean:
	rm -rf node_modules yarn.lock
gen:
	yarn run gen
run:
	npx polymer serve -v
