#!/bin/sh

git checkout master
git subtree split --prefix deploy -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages

echo "Pronto!"