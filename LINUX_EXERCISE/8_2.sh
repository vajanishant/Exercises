#! /bi/bash"
echo "Line number 3 to 8 from $1"
sed -n '3,8p' $1
