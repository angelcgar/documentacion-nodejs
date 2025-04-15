---
title: Instalación de Node.js
description: Cómo instalar Node.js en tu sistema operativo.
---

Node.js es compatible con la mayoría de los sistemas operativos modernos. A continuación, se describen los pasos para instalarlo en los sistemas más comunes.

## Windows

1. Ve al sitio oficial: [https://nodejs.org/es](https://nodejs.org/es)
2. Descarga el instalador recomendado para la mayoría de los usuarios.
3. Ejecuta el instalador y sigue los pasos del asistente.
4. Verifica la instalación abriendo una terminal y ejecutando:

```bash
node -v
npm -v
```

## macOS

Puedes instalar Node.js usando Homebrew:

```bash
brew install node
```

O descarga el instalador desde [nodejs.org](https://nodejs.org/es).

## Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install nodejs npm
```

También puedes usar nvm (Node Version Manager) para instalar y gestionar varias versiones de Node.js:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# Reinicia la terminal y luego:
nvm install --lts
```

## Verificación

Para comprobar que Node.js y npm están correctamente instalados, ejecuta:

```bash
node -v
npm -v
```

Deberías ver los números de versión correspondientes.
