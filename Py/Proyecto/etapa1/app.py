#definimos una lista de diccionarios para almacenar los producto.
productos = []
def agregar_producto(codigo, descripcion, cantidad, precio, imagen, proveedor):

    if consultar_producto(codigo):
        return False

nuevo_producto = {
    'codigo':codigo,
    'descripcion': descripcion,
    'cantidad': cantidad,
    'precio': precio,
    'imagen': imagen,
    'proveedor': proveedor
}
productos.append(nuevo_producto)
return True

def consultar_producto(codigo):
    for producto in productos:
        if producto['codigo'] == codigo:
            return producto
        return False
    
def modificar_producto(codigo, nueva_descripcion, nueva_cantidad, nuevo_precio, nueva_imagen, nuevo_proveedor)
    for producto in productos:
        if producto['codigo'] == codigo:
           producto['descripcion'] == nueva_descripcion
           producto['cantidad'] == nueva_cantidad
           producto['precio'] == nuevo_precio
           producto['imagen'] == nueva_imagen
           producto['proveedor'] == nuevo_proveedor
           return True
return False

def listar_productos():
    print("-"*50)
for producto in productos:
    print(f"Código....: {producto['codigo']}")
    print(f"Descripcion....: {producto['descripcion']}")
    print(f"Cantidad....: {producto['cantidad']}")
    print(f"Precio....: {producto['precio']}")
    print(f"Imagen....: {producto['imagen']}")
    print(f"Proveedor....: {producto['proveedor']}")
    print("-"*50)

def eliminar_producto(codigo):
    for producto in productos:
        if producto['codigo'] == codigo:
            productos.remove(producto)
            return True
return False

#agregar productos a la lista:

agregar_producto(1,'teclado USB 101 teclas', 10, 4500, 'teclado.jpg', 101)
agregar_producto(2, 'Mouse USB 3 botones', 5, 2500, 'mouse.jpg', 102)
agregar_producto(3,'Monitor LCD 22 pulgadas', 15, 52000, 'monitor.jpg', 103)
agregar_producto(4,'Monitor LCD 27 pulgadas',25 ,78500 ,'monitor.jpg', 104)
agregar_producto(5, 'Pad mouse', 5, 500, 'padmouse.jpg', 105 )
agregar_producto(3,'Parlantes USB', 4, 2500, 'parlantes.jpg', 105) #no es posible agregarlo, mismo codigo que producto 3.

#Listamos los productos en ppantalla 

listar_productos()

#cconsultar un produucto en pantalla
cod_prod = int(input("Ingrese el codigo de un producto: "))
producto = consultar_producto(cod_prod)
if producto:
    print(f"Producto encontrado:{producto['codigo']} - {producto['descripcion']}")
else:
    print(f'Producto {cod_prod} no encontrado.')

#modificar un producto por su codigo
modificar_producto(1, 'teclado mecanico 62 teclas', 20, 34000, 'tecadomecanico.jpg', 106)

#Listamos todos los productos en pantalla
listar_productos()

#Eliminamos un producto del inventario

eliminar_producto(5)

#Listamos todos los productos en pantalla

listar_productos()

class Catalogo:
    productos = []

def agregar_producto(self, codigo, descripcion, cantidad, precio, imagen, proveedor):

    if self.consultar_producto(codigo):
        return False

nuevo_producto = {
    'codigo':codigo,
    'descripcion': descripcion,
    'cantidad': cantidad,
    'precio': precio,
    'imagen': imagen,
    'proveedor': proveedor,
}
self.productos.append(nuevo_producto)
return True


            