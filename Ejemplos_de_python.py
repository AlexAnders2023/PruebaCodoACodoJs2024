
#print ("hola mundo")
"""este es un comentario"""
#def suma(a,b): # comentario en linea
    #"""esta funcion devuelve la suma de los parametros a y b"""
    #return a + b

"""def suma_numeros(numeros):
    suma=0
    for n in numeros:
        suma += n
        print(suma)
    return suma
print()"""

"""print("linea1", end="") #evita el salto de linea al final de los argumentos
#print("") #hace un salto de linea al estar vacio
print("linea2")

nombre = "Alejandro"
a = 40
b = 30
promedio = (a+b) / 2

print("Mi nombre es: ", nombre)
print("La suma de" ,a,"y",b, "es: ",a+b)
print("Promedio: "+str(promedio))

nombre = input("Ingrese su nombre: ")
print(nombre)

num1 = input("Ingrese un numero: ")
numero = float(num1)
resultado = numero * 2
print(numero,"x 2 = ", resultado)"""


"""x = 5
print(type(x))"""

"""print("Mi perro `Tony`")
print(' Mi perro "Tony"')"""

#  ' '

"""var1 = 'Hola'
var2 = 'Python'
var3 = var1 + ' ' +var2
print(var3)"""

"""var1 = 3+5
var2 = "3" + "5"
var3 = 3 + "5"
print(var1)
print(var2)
print(var3)"""

"""cadena = "Codo a Codo"
print("C" in cadena)
print("n" in cadena)
print("Codo" in cadena)
print("A" not in cadena)
print("o" not in cadena)"""
#print("*"*90)

'''nro1= int(input("Ingrese el prrimer numero: "))
nro2= int(input("Ingrese el segundo numero: "))
suma= nro1 + nro2
print("La suma es: ",suma)'''

'''cont= 1 #estructura while
suma= 0
while cont <= 5:
 num= int(input("Ingrese un número: "))
 suma = suma + num # Acumulamos, es equivalente suma += num
 cont = cont + 1 # Incrementamos, es equivalente cont += 1
print("La suma es:", suma)
print("El promedio es:", suma/cont)'''

'''suma= 0  #estructura for
for cont in range(5):
 num= int(input("Ingrese un número: "))
 suma = suma + num # Acumulamos, es equivalente suma += num
print("La suma es:", suma)
print("El promedio es:", suma/(cont+1))'''

##Actividad Práctica - Python Unidad 1
#1) Escribe un programa muestre por pantalla “Hello World”

#print ("Hello world")

#2) Escribe un programa que escriba en la pantalla el resultado de sumar 3 + 5.

'''a=3
b=5
suma=(a+b)
print(suma)
'''
#3) Escribe un programa que pida el nombre del usuario y escriba un texto que diga “Hola nombreUsuario”

'''nombre=input("Ingrese su nombre: ")
print("Hola, "+nombre)'''

#4) Escribe un programa que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

'''numero1=int(input("ingrese el primer numero: "))
numero2=int(input("ingrese el segundo numero: "))
suma=(numero1+numero2)
print(suma)'''

#5) Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor

'''num1=int(input("Ingrese el primer numero: "))
num2=int(input("Ingrese el segundo numero: "))

if num1 > num2:
    print("El primer numero es el mayor")
else:
    print("El segundo numero es el mayor")  '''   

#6) Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

'''num1=int(input("Ingrese el primer numero: "))
num2=int(input("Ingrese el segundo numero: "))
num3=int(input("Ingrese el tercer numero: "))

mayor=num1

if num2 > mayor:    #en este guardo en un varible para comparar
    mayor=num2
if num3 > mayor:
    mayor=num3
print("El mayor es el numero: ",mayor)
# En este casose utiliza if-elif    
if mayor > num2 and mayor < num3:
    print("El mayor es el numero: ",num3)
elif mayor > num3 and mayor < num2:
    print("El mayor es el numero: ", num2) 
else:
    print("El mayor es el numero: ",mayor)'''     

#7) Escribe un programa que pida un número y diga si es divisible por 2

'''numero=int(input("Ingrese un numero para verificar si es divible por 2: "))

if numero % 2 == 0:
    print("El numero es divisible por 2")
else: 
    print("El numero no es divisible por 2")'''    

#8) Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

'''numerito= int(input("Ingrese un numero para verficar si es divisible por 2,3,5 o 7: "))

if numerito % 2 == 0:
    print("El numero es divisible por 2")
else:
    if numerito % 3 == 0:
        print("El numero es divisible por 3")
    else:
        if numerito % 5 == 0:
            print("El numero es divisible por 5")
        else: 
            if numerito % 7 == 0:
                print("El numero es divible por 7")
            else:
                print("El número no es divisible por 2, 3, 5 ni 7.")'''

#9) Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

num= int(input("Ingrese un numero para verficar si es divisible por 2,3,5 o 7: "))
divisible = ""

if num % 2 == 0:
    divisible += "2, " #arrreglar esta parte que no se entiende???

if divisible != (""):
    print("El número es divisible por: " + divisible [0, -2] + ".")
else:
    print("El número no es divisible por 2, 3, 5 ni 7.")
