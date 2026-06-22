#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
ROOT_DIR=$(cd "$SCRIPT_DIR/.." && pwd)
MANIFEST="$SCRIPT_DIR/assets.manifest"
DEST_DIR="$ROOT_DIR/assets/libraries"

if [ ! -f "$MANIFEST" ]; then
	echo "FAILED: assets.manifest not found at $MANIFEST"
	exit 1
fi

mkdir -p "$DEST_DIR"

DOWNLOADER=""
if command -v curl >/dev/null 2>&1; then
	DOWNLOADER="curl"
elif command -v wget >/dev/null 2>&1; then
	DOWNLOADER="wget"
else
	echo "FAILED: curl or wget is required"
	exit 1
fi

download_file() {
	local url="$1"
	local name="$2"
	local target="$DEST_DIR/$name"

	echo "Downloading $url -> $target"

	if [ "$DOWNLOADER" = "curl" ]; then
		curl -L --fail --silent --show-error -o "$target" "$url"
	else
		wget -O "$target" "$url"
	fi
}

while IFS= read -r line || [ -n "$line" ]; do
	line="${line#${line%%[![:space:]]*}}"
	line="${line%${line##*[![:space:]]}}"

	if [ -z "$line" ] || [ "${line#\#}" != "$line" ]; then
		continue
	fi

	if [[ "$line" == *"|"* ]]; then
		url="${line%%|*}"
		name="${line#*|}"
	else
		url="$line"
		name="$(basename "${url%%\?*}")"
	fi

	if [ -z "$name" ]; then
		echo "SKIP: Could not determine filename for $url"
		continue
	fi

	download_file "$url" "$name"
done < "$MANIFEST"
