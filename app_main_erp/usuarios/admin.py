# -*- encoding: utf-8 -*-
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import Usuario

@admin.register(Usuario)
# Por defecto el admin usa -> UserAdmin
class UsuarioAdmin(UserAdmin):

	list_display = ('username', 'email', 'password',
				    'slug', 'fecha_registro', 'usuario_creador', 'nombre_host', 'direccion_ip',
					'fecha_ultima_actualizacion', 'ultimo_usuario_editor', 'ultimo_nombre_host', 'ultimo_direccion_ip')

	search_fields  = ('username', 'id')

	fieldsets = (
			('Usuario', {'fields':('username', 'password', 'email',)}),

			('Permissions', {'fields':('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
		)
	class Meta:
		model = Usuario
