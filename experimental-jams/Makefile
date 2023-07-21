src/index.html: \
		src/jams/strawberry-disaster.md
	pandoc \
		--standalone \
		--template=templates/template.html \
		--defaults=pandoc/default \
		--metadata=banner=images/strawberry-disaster.png \
		$< -o $@
