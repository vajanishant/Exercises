#! /bin/bash
find . -name "*.txt" | xargs grep -i "linux" | wc -l
