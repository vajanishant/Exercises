#! bin/bash
read -p "Enter number1: " n1
read -p "Enter number2: " n2
let result=$n1*$n2
echo "Result: $result"
if [ $n1 == $n2 ]
then
	echo "Both numbers are equal"
elif [ $n1 -gt $n2 ]
then
	echo "$n1 is grater than $n2"
else
echo "$n1 isless than $n2"
fi
if [ $n1 -gt 0 ]
then
echo "number1 is positive"
elif [ $n1 -lt 0 ]
then
echo "number1 is negative"
else
echo "number1 is zero"
fi
if [ $n2 -gt 0 ]
then
echo "number2 is positive"
elif [ $n2 -lt 0 ]
then
echo "number2 is negative"
else
echo "number2 is zero"
fi

