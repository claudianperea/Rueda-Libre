# Rueda Libre

Sitio web informativo para un negocio de alquiler de bicicletas en Medellín. El proyecto se desarrolla por etapas con HTML, CSS, Bootstrap y Tailwind CSS. La tercera semana agrega la campaña **Rueda Nocturna**, una landing responsive de recorridos guiados por la ciudad.

## Productos

- **Sitio principal:** inicio, tarifas y rutas, reservas.
- **Pruebas Bootstrap:** catálogo de bicicletas con la grilla responsive de Bootstrap 5.3.3.
- **Rueda Nocturna:** prototipo, landing, formulario de inscripción y kit de componentes con Tailwind CSS 4.

## Enlaces

- Repositorio: https://github.com/claudianperea/Rueda-Libre
- Sitio principal en GitHub Pages: `PENDIENTE_PUBLICAR_Y_VERIFICAR`
- Landing Rueda Nocturna: `PENDIENTE_PUBLICAR_Y_VERIFICAR`
- Kit de componentes: `PENDIENTE_PUBLICAR_Y_VERIFICAR`

El repositorio apunta a `main`. La publicación debe habilitarse en GitHub Pages desde **Settings → Pages**. Las direcciones públicas no se marcan como publicadas hasta comprobarlas después del despliegue.

## Páginas

| Archivo | Contenido |
|---|---|
| `index.html` | Página de inicio, flota, rutas y carrusel de campaña. |
| `paginas/tarifas.html` | Tarifas de alquiler y recorridos guiados. |
| `paginas/reservas.html` | Formulario de reserva y datos de contacto. |
| `pruebas/catalogo-bootstrap.html` | Ejercicio comparativo de grilla Bootstrap. |
| `nocturna/prototipo.html` | Prototipo rápido con Play CDN. |
| `nocturna/index.html` | Landing completa Rueda Nocturna. |
| `nocturna/componentes.html` | Kit de botones, card, alertas e inputs. |

## Tecnologías

- HTML5 semántico y formularios con validación nativa.
- CSS3 con variables, Flexbox, Grid y media queries.
- Bootstrap 5.3.3 por CDN en el sitio principal y el catálogo de comparación.
- Tailwind CSS 4.1.10 mediante CLI en `nocturna/`.
- Git y GitHub Pages.

## Ejecutar Tailwind localmente

Abre una terminal dentro de `nocturna/` y ejecuta:

```bash
npm install
npm run watch
```

Esto instala Tailwind y deja la CLI observando los archivos. Para generar el CSS minificado que se publica:

```bash
npm run build
```

La landing y `componentes.html` cargan `src/output.css`. Ese archivo debe mantenerse en Git. `node_modules/` está excluido mediante `.gitignore`.

El formulario de Rueda Nocturna valida los campos en el navegador y muestra una confirmación de demostración. No está conectado a un servidor ni almacena/envía inscripciones reales.

## Mapa de construcción

1. **Semana 1:** repositorio, estructura HTML, páginas, tablas, navegación, semántica, formulario y CSS de marca.
2. **Semana 2:** Flexbox para encabezado y pie; Grid para flota y layout; diseño mobile-first y comparación inicial con Bootstrap.
3. **Semana 3, día 1:** prototipo Tailwind, CLI, botones, tarjetas de rutas y kit de componentes.
4. **Semana 3, día 2:** landing, responsive, tema de marca, modo oscuro y comparación Bootstrap/Tailwind.
5. **Semana 3, día 3:** formulario de inscripción, integración de navegación y carrusel, planes y documentación.

## Decisiones de diseño de Rueda Nocturna

- Azul Noche `#14213D` y Crema `#FAF6EF` para fondos y texto con contraste alto.
- Verde Ruta `#1E7A4F`, Naranja Pedal `#F39A2B` y Amarillo Farol `#FFD166` para acciones y destacados.
- Montserrat para títulos y Open Sans para textos.
- Grid para secciones en filas y columnas; Flexbox para alinear elementos dentro de tarjetas y encabezados.
- Variante `dark:` de Tailwind basada en la preferencia de color del sistema.

## Capturas

Agregar aquí capturas reales después de abrir el sitio:

- `capturas/rueda-libre-escritorio.png`
- `capturas/rueda-nocturna-movil.png`
- `capturas/rueda-nocturna-modo-oscuro.png`

## Lista de entrega pendiente

- [ ] Ejecutar `npm install` y `npm run build` dentro de `nocturna/`.
- [ ] Revisar responsive a 360, 768, 1024 y 1280 px.
- [ ] Probar modo claro/oscuro y navegación con teclado.
- [ ] Probar formulario vacío, inválido y completo.
- [ ] Medir CSS y JavaScript de Bootstrap en DevTools → Network.
- [ ] Validar HTML con Nu (W3C) y corregir cualquier error reportado.
- [ ] Agregar capturas reales.
- [ ] Habilitar GitHub Pages y verificar todas las rutas publicadas.
- [ ] Registrar tiempos reales de los mini retos contrarreloj y practicar la demo de tres minutos.

## Bitácora

Consulta [`bitacora.txt`](bitacora.txt) para el detalle de los mini retos, decisiones, correcciones y pruebas pendientes.

## Autoría

Claudia Perea · Proyecto académico de Desarrollo de Software.
