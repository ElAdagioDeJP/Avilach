from django.db import models

class Usuario(models.Model):
    nombre_user = models.CharField(max_length=255)
    nombre = models.CharField(max_length=255)
    rol = models.CharField(max_length=255)  # roll_text corregido
    telefono = models.CharField(max_length=20)
    imagen = models.TextField()  # O usar ImageField si subirás archivos

class Inmueble(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=255)
    tipo_inmueble = models.CharField(max_length=50)
    tipo_negocio = models.CharField(max_length=50)
    precio_venta = models.FloatField(null=True, blank=True)
    precio_alquiler = models.FloatField(null=True, blank=True)
    tiempo = models.CharField(max_length=50, null=True, blank=True)
    valor_administracion = models.FloatField(null=True, blank=True)  # corregido nombre
    ano_construccion = models.CharField(max_length=4)  # corregido typo
    cuartos = models.IntegerField()
    banos = models.IntegerField()  # hano:s:int corregido
    estacionamiento = models.IntegerField()  # esta -> estacionamiento
    piso = models.IntegerField(null=True, blank=True)
    area_construida = models.FloatField()  # area_constru
    area_total = models.FloatField()  # tipo agregado
    youtube = models.CharField(max_length=255, null=True, blank=True)
    estado = models.CharField(max_length=100)
    ciudad = models.CharField(max_length=100)
    direccion = models.TextField()
    codepostal = models.CharField(max_length=10)
    imagenes = models.TextField()  # Podría ser JSONField si usas PostgreSQL
    caracteristicas_interiores = models.TextField()  # caracteristicas_inter
    caracteristicas_exteriores = models.TextField()  # caracteristicas_ext
    descripcion = models.TextField()  # description_inmueble
    nombre_propietario = models.CharField(max_length=255)
    apellido_propietario = models.CharField(max_length=255)  # campos unificados
    email_propietario = models.EmailField()
    telefono_propietario = models.CharField(max_length=20)
    comision = models.FloatField(null=True, blank=True)
    comision_externa = models.FloatField(null=True, blank=True)
    nombre_aliado = models.CharField(max_length=255)

class Cliente(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    tipo = models.CharField(max_length=50)
    nombre = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255)
    correo = models.EmailField()
    telefono = models.CharField(max_length=20)
    descripcion = models.TextField()
    tipo_inmueble = models.CharField(max_length=50)
    tipo_negocio = models.CharField(max_length=50)  # tipo_negocio
    estado = models.CharField(max_length=100)
    ubicacion = models.CharField(max_length=255)
    presupuesto = models.FloatField()
    cuartos = models.IntegerField()
    banos = models.IntegerField()  # hano:s:int corregido
    caracteristicas_internas = models.TextField()  # intermas -> internas
    caracteristicas_externas = models.TextField()
    descripcion_propiedad = models.TextField()