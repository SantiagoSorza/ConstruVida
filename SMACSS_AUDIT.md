/* ========================================
   SMACSS CONFORMANCE AUDIT & FIXES
   ======================================== */

## DUPLICADOS CORREGIDOS:

1. ❌ .btn--primary (cotizaciones.css) → ✅ RENOMBRADO A .btn--plan
   - Archivos HTML actualizados: cotizaciones.html

2. ❌ .card (independientes.css) → ✅ CONSOLIDADO EN cards.css
   - Eliminada definición redundante de independientes.css
   - Ahora usa definición centralizada desde modules/cards.css

3. ❌ .pagination (independientes.css) → ✅ CONSOLIDADO EN pagination.css
   - Eliminada definición redundante de independientes.css
   - Ahora usa definición centralizada desde modules/pagination.css

4. ❌ .container (home.css) → ✅ MOVIDO A layout/grid.css
   - Eliminada de home.css
   - Ahora definido centralmente en layout/grid.css

5. ❌ .section, .section-title, .section-subtitle (independientes.css) → ✅ MOVIDO A layout/grid.css
   - Eliminadas de independientes.css
   - Ahora definidas centralmente en layout/grid.css

6. ❌ .form-submit (contact.css) → ✅ RENOMBRADO A .form-card__submit
   - Mejor adherencia a BEM naming convention
   - Claramente indica que es un botón dentro de .form-card

## SMACSS LAYERS - DISTRIBUCIÓN ACTUALIZADA:

### BASE (src/styles/base/)
- reset.css → Estilos base HTML
- typography.css → Tipografía global
- utilities.css → Utilidades genéricas

### LAYOUT (src/styles/layout/)
- footer.css → Estilos del footer
- grid.css → Contenedores, grillas, .section (centralizado)
- header.css → Estilos del header
- sections.css → Layouts de secciones

### MODULES (src/styles/modules/)
- banners.css → Banners curvos (.curved-section, .curved__*, etc.)
- buttons.css → Todos los botones (.btn, .btn--primary, .btn--secondary, etc.)
- cards.css → Todos los cards (.card, .card__*, etc.)
- contact.css → Estilos específicos de contacto (.contact-*, .quote-card, .form-card, etc.)
- cotizaciones.css → Estilos de planes (.plan-card, .btn--plan, etc.)
- empresas.css → Estilos de sección empresas (.empresas-*, etc.)
- forms.css → Estilos de formularios (.form, .form__*, etc.)
- hero.css → Estilos de hero section (.hero, .hero__*, etc.)
- home.css → Estilos de home (.features-*, .insurance-*, etc.)
- independientes.css → Referencia a modules/cards.css (eliminadas duplicaciones)
- nosotros.css → Estilos de nosotros (.nosotros-*, etc.)
- pagination.css → Estilos de paginación (.pagination, .pagination__*, etc.)

### STATE (src/styles/state/)
- states.css → Estados globales (.is-*, .has-*)

### THEME (src/styles/theme/)
- colors.css → Variables de colores
- fonts.css → Variables de fuentes
- spacing.css → Variables de espaciado

## NOMENCLATURA BEM - CONVENCIONES:

✅ CORRECTO:
- .block { ... }
- .block__element { ... }
- .block__element--modifier { ... }
- .is-state { ... }
- .has-condition { ... }

✅ MÓDULOS ACTUALIZADOS:
- contact.css: .contact-section--green, .form-card, .form-card__*, .quote-card, .quote-card__*
- cotizaciones.css: .plan-card, .plan-card__*, .btn--plan
- empresas.css: .empresas-about, .empresas-services, .empresas-services__*
- buttons.css: .btn, .btn--primary, .btn--secondary, .btn--accent
- hero.css: .hero, .hero__*, .hero--left, .hero--center, .hero--lg

## PRÓXIMAS VALIDACIONES RECOMENDADAS:

1. Verificar que todos los HTML usen las clases renombradas:
   - Buscar residuos de .btn--primary en cotizaciones (✅ ACTUALIZADO)
   - Buscar residuos de .form-submit en contactenos.html

2. Asegurar que independientes.html y otros usen .card/.pagination correctamente

3. Validar que layout/grid.css esté importado en styles.css

4. Ejecutar auditoría visual: npm start y verificar que todos los estilos se apliquen correctamente
