
## NOVEDADES DE ANGULAR 19

### PUNTOS DESTACADOS

1.  **Hidratación incremental**: Carga de componentes UI de forma perezosa según la interacción del usuario.
2.  **Reproducción de eventos**: Garantiza la continuidad de las acciones del usuario en aplicaciones renderizadas del lado del servidor (SSR).
3.  **Modos de renderizado por ruta**: Optimización del renderizado por ruta (servidor, cliente, prerenderizado).
4.  **Reactividad mejorada**: APIs estabilizadas, nuevos `linkedSignal` y primitivos de recursos.
5.  **Herramientas para desarrolladores**: Reemplazo de módulos en caliente (HMR), detección de importaciones no utilizadas, variables locales en plantillas.
6.  **Actualizaciones de Material y CDK**: Drag & drop en 2D, selector de tiempo y temas avanzados.
7.  **Angular sin zones**: Aplicaciones más rápidas sin `zone.js`.

----------

### HIDRATACIÓN INCREMENTAL

-   **Qué es**: Hidrata solo las partes de la app que los usuarios interactúan usando `@defer`.
-   **Uso**: Reduce la carga inicial de JavaScript en aplicaciones SSR.
-   **Resultado**: Tiempos de carga más rápidos y menor consumo de recursos.
-   **Beneficio clave**: Mejora el rendimiento sin sacrificar la interactividad.

----------

### REPRODUCCIÓN DE EVENTOS

-   **Problema resuelto**: Captura y reproduce acciones de usuario durante las interrupciones de la hidratación en apps SSR.
-   **Resultado**: Ningún clic o input se pierde, garantizando una experiencia fluida.
-   **Beneficio clave**: Evita la frustración por botones no responsivos o acciones omitidas.

----------

### MODOS DE RENDERIZADO POR RUTA

-   **Nueva funcionalidad**: Configura rutas específicas para renderizar en servidor, cliente o prerenderizado.
-   **Resultado**: Rendimiento ajustado con rutas optimizadas.
-   **Beneficio clave**: Mejor experiencia del usuario y menor carga en el servidor.

----------

### REACTIVIDAD MEJORADA

¡La gestión de estado evoluciona con señales y recursos!

-   **APIs estabilizadas**: Inputs, outputs y consultas de vista ahora son estables.
-   **Nuevos primitivos**:
    -   `linkedSignal`: Relaciona estados dependientes fácilmente.
    -   `resource`: Maneja operaciones asíncronas dentro del gráfico de señales.
-   **Resultado**: Menos código repetitivo para la gestión de estado y async.
-   **Beneficio clave**: Simplificación de relaciones de estado complejas.

----------

### MEJORAS PARA LA CALIDAD DE VIDA DEL DESARROLLADOR

-   **HMR**: Actualizaciones instantáneas de estilos y plantillas sin recargar la página.
-   **Advertencias de importaciones no utilizadas**: Angular CLI detecta y elimina importaciones innecesarias.
-   **Variables locales en plantillas**: Declara variables directamente en las plantillas.
-   **Resultado**: Desarrollo más rápido y bases de código más limpias.
-   **Beneficio clave**: Mayor eficiencia y menos tareas repetitivas.

----------

### ACTUALIZACIONES DE MATERIAL Y CDK

¡Componentes personalizables y mejores herramientas!

-   **Selector de tiempo**: Componente accesible integrado.
-   **Drag & drop en 2D**: Movimiento libre entre filas y columnas.
-   **API de temas mejorada**: Usa `@mat.theme` para una tematización más simple y reutilizable.
-   **Resultado**: Mejor diseño UX con menos esfuerzo de implementación.
-   **Beneficio clave**: Capacidades UI avanzadas con mínima carga.

----------

### ANGULAR SIN ZONES

-   **Qué es nuevo**: Soporte experimental para apps sin `zone.js`.
-   **Resultado**: Mejor rendimiento SSR y tamaño reducido del bundle de JavaScript.
-   **Cómo funciona**: Reemplaza `zone.js` con un operador de RxJS para notificar cuando Angular termina de renderizar.
-   **Beneficio clave**: Apps listas para el futuro con arquitectura simplificada.
