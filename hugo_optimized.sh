#!/bin/bash

MAXIMUM_JPG_SIZE=250
PNG_OPTIMIZATION_LEVEL=2

if hash exiftool 2>/dev/null; then
	exiftool -all= public/docs/nineveh public/docs/amphissa public/docs/jaffa public/docs/laguna public/docs/repo public/posts
else
	echo "Install perl-image-exiftool to optimize images"
fi

if hash jpegoptim 2>/dev/null; then
	for image in $(find public/docs/nineveh public/docs/amphissa public/docs/jaffa public/docs/laguna public/docs/repo public/posts -regextype posix-extended -iregex ".*\.(jpeg|jpg)"); do
		mogrify -resize '1400>' $image
		jpegoptim --strip-com --strip-adobe --size=$MAXIMUM_JPG_SIZE $image
	done;
else
	echo "Install jpegoptim to optimize JPEG images"
fi

if hash optipng 2>/dev/null; then
	for image in $(find public/docs/nineveh public/docs/amphissa public/docs/jaffa public/docs/laguna public/docs/repo public/posts -regextype posix-extended -iregex ".*\.(png)"); do
		mogrify -resize '1400>' $image
		optipng -clobber -o $PNG_OPTIMIZATION_LEVEL $image
	done;
else
	echo "Install optipng to optimize PNG images"
fi