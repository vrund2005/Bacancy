
def multiply(*args) -> int | float | str:
    """
    Docstring for multiply
    :param args: Description : it is used to multiply n number of iteam.
    """

    finalAns=1 
    try :
        for num in args:
            finalAns*=num 
    except Exception as e: 
         return str(e)    
    return finalAns


print("Test with multiple cases:")

print("Execution With All Integers:",multiply(1,2,3))
print("Execution With Mix Numbers:",multiply(1,2.3,3))
print("Execution With Mix Types:",multiply(1,2.3,3,'c'))


