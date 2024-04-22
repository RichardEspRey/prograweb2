Delimiter $$
Use web2; $$
Create procedure pProductos(
op varchar(10),
pProductos_ID int,
pCategoria_id int,
pUserID int,
pImg MEDIUMBLOB,
pNombre varchar(50),
pPrecio DECIMAL(10, 2),
pCantidad DECIMAL(3,2),
pDescrip varchar(100),
pInventario int

)
Begin	
declare user_exist INT;
declare resp INT; /*variable a devolver para manejo de respuestas */

	If op = 'I' then /* Opcion para insertar usuarios */
		 /* Opcion validacion para no colocar el mismo correo */
		Insert into productos(img,nombre,precio,cantidad,descrip,inventario) values(pCategoria_id,pUserID,pUserID,pImg,pNombre,pPrecio,pCantidad,pDescrip,pInventario);
		set resp = 1;
		select resp;
	End If;

End; $$
Delimiter ;

drop procedure pProductos;