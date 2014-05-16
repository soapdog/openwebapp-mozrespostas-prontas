#!/bin/sh

echo "Deploy..."

./tools/deploy.sh

git commit -am "deploying..."

echo "Publish..."

git checkout master
git subtree split --prefix deploy -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages

echo "Pronto!"