---
layout: default
title: Contacto
description: Contáctanos para más información
permalink: /contact/
---

# Contacto

## Contáctanos

📧 **Email:** {{ site.email }}

📞 **Teléfono:** +58 (XX) XXXX-XXXX

📍 **Dirección:** Ciudad, País

## Horario de atención

- **Lunes a Viernes:** 8:00 AM - 6:00 PM
- **Sábados:** 9:00 AM - 1:00 PM
- **Domingos:** Cerrado

## Envíanos un mensaje

<form action="https://formspree.io/f/tu-form-id" method="POST">
    <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
        <label for="message">Mensaje:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    <button type="submit" class="btn-primary">Enviar mensaje</button>
</form>
