#/bin/sh -e

# Read the expected version:
EXPECT_MAGICK_VERSION="$(awk -F'=' '/^magick=/{print$2}' ./scripts/dev-dependencies.txt)"

# Find magick:
#
# 1. Use MAGICK if it is set.
# 2. Look for magick-$EXPECTED_VERSION.
# 3. Look for magick.
#
if [ "${MAGICK}" = "" ]; then
	if ! MAGICK="$(which "magick-${EXPECT_MAGICK_VERSION}")"; then
		if ! MAGICK="$(which "magick")"; then
			echo "Requires magick ${EXPECT_MAGICK_VERSION}; no version found"
			exit 1
		fi
	fi
fi

# Check magick version:
ACTUAL_MAGICK_VERSION="$(${MAGICK} --version | head -1 | cut -d' ' -f3 | cut -d'.' -f1)"
if [ "${ACTUAL_MAGICK_VERSION}" != "${EXPECT_MAGICK_VERSION}" ]; then
	echo "Requires magick ${EXPECT_MAGICK_VERSION}; version ${ACTUAL_MAGICK_VERSION} found"
	# Version mismatch is an error on CI:
	[ "${CI}" = "" ] || exit 1
fi

# Read the expected version:
EXPECT_EXIFTOOL_VERSION="$(awk -F'=' '/^exiftool=/{print$2}' ./scripts/dev-dependencies.txt)"

# Find exiftool:
#
# 1. Use EXIFTOOL if it is set.
# 2. Look for exiftool-$EXPECTED_VERSION.
# 3. Look for exiftool.
#
if [ "${EXIFTOOL}" = "" ]; then
	if ! EXIFTOOL="$(which "exiftool-${EXPECT_EXIFTOOL_VERSION}")"; then
		if ! EXIFTOOL="$(which "exiftool")"; then
			echo "Requires exiftool ${EXPECT_EXIFTOOL_VERSION}; no version found"
			exit 1
		fi
	fi
fi

# Check exiftool version:
ACTUAL_EXIFTOOL_VERSION="$(${EXIFTOOL} -ver | cut -d'.' -f1)"
if [ "${ACTUAL_EXIFTOOL_VERSION}" != "${EXPECT_EXIFTOOL_VERSION}" ]; then
	echo "Requires exiftool ${EXPECT_EXIFTOOL_VERSION}; version ${ACTUAL_EXIFTOOL_VERSION} found"
	# Version mismatch is an error on CI:
	[ "${CI}" = "" ] || exit 1
fi

for image_path; do
	if [ ! -f "${image_path}" ]; then
		echo "Not Found: ${image_path}"
	fi

	parent_dir="$(realpath $(dirname -- "${image_path}"))"
	image_file="$(basename -- "${image_path}")"
	image_type="${image_file##*.}"
	image_base="${image_file%.*}"

	# Preprocess image.
	output_path="${parent_dir}/${image_base}-1620x1080-unshaded.${image_type}"
	${MAGICK} "${image_path}" -resize 1620x1080 "${output_path}"
	${EXIFTOOL} -overwrite_original_in_place -all= "${output_path}" >/dev/null
	${EXIFTOOL} -overwrite_original_in_place -Artist="cyberglot" -Copyright="(c) 2026 cyberglot" "${output_path}" >/dev/null
done
