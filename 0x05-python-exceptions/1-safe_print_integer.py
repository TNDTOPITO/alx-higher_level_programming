#!/usr/bin/python3
def safe_print_integer(value):
    try:
        print("{:d}".forma(value))
    except:
        return (False)
    else:
        return (True)
