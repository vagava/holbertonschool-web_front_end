#! /bin/bash

for x in fix-a11y/10-index.html
do
    git add .
    git commit -m "add $x"
    git push origin main

done
 
