#! /bin/bash

#tre=$(ls -l)

get_detail=$(ls -l | cut -f 1 -d' ' | cut -c1 > new)
fil=$(sed -i '1d' new)
ls -l > temp
sed -i '1d' temp
t=$(awk '{ print $9 }' temp > temp2)
file="./new"
#echo -e "$(cat temp2)\n"
while IFS= read -r line
do
        # display $line or do somthing with $line
#1	printf '%s\n' "$line"
	if [ "$line" = "l" ];then
		var=$(head -n 1 ./temp2)
		echo -e "$var"
		sed -i '1d' temp2
	elif [ "$line" = "-" ];then
		var=$(head -n 1 ./temp2)
		sed -i '1d' temp2
		echo -e "----->$var"
	fi
#	echo -e "\n$t"
done <"$file"
