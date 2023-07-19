.phony: html
html: _site/index.html

_site/:
	@mkdir -p _site/

_site/assets/: | _site/
	@cp -R assets/* _site/

_site/index.html: _site/assets/ defaults.yaml html.yaml Makefile README.md | _site
	@pandoc -ddefaults -dhtml -o _site/index.html
