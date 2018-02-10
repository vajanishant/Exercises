#! /bin/bash
read -p "Enter a number: " n

echo "using for loop :"
for ((i=1; i<=n; i++ ))
do
echo "$i "
done

echo "using while loops"
let i=0
while [ $i -lt $n ]
do
let i=i+1
echo "$i "
done

echo "using until loop"
let i=1
until [ $i -gt $n ]
do
echo "$i "
let i=i+1
done

