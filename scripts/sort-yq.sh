#!/bin/sh -e

# Read the expected version:
EXPECT_VERSION="$(awk -F'=' '/^yq=/{print$2}' ./scripts/dev-dependencies.txt)"

# Find yq:
#
# 1. Use YQ if it is set.
# 2. Look for yq-$EXPECTED_VERSION.
# 3. Look for yq.
#
if [ "${YQ}" = "" ]; then
	if ! YQ="$(which "yq-${EXPECT_VERSION}")"; then
		if ! YQ="$(which "yq")"; then
			echo "Requires yq ${EXPECT_VERSION}; no version found"
			echo "To install, run:"
			echo
			echo "  cabal install yq-${EXPECT_VERSION}"
			echo
			exit 1
		fi
	fi
fi

# Check yq version:
ACTUAL_VERSION="$("${YQ}" --version | head -n 1 | cut -d' ' -f4 | cut -d'v' -f2)"
if [ "${ACTUAL_VERSION}" != "${EXPECT_VERSION}" ]; then
	echo "Requires yq ${EXPECT_VERSION}; version ${ACTUAL_VERSION} found"
	# Version mismatch is an error on CI:
	[ "${CI}" = "" ] || exit 1
fi

# Sort data
echo "Sort data with yq version ${ACTUAL_VERSION}"
# shellcheck disable=SC2086
git ls-files --exclude-standard --no-deleted --deduplicate 'src/data/*.yaml' | while read -r yaml; do
	cat "${yaml}" > "${yaml}.bak" && \
		yq '. | sort_by(.id) | reverse' "${yaml}.bak" > "${yaml}" &&\
		rm "${yaml}.bak"
done
