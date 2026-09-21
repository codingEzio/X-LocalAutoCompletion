# X-LocalAutoCompletion

Autocompletado local e instantáneo de palabras para Visual Studio Code. Sin modelos, cuentas, claves
de API ni conexión de red.

Escribe `ar` en un archivo que contenga `archive`, o escribe `th` en cualquier parte: puede sugerir
`archive` o `the`. Eso es todo.

## Qué hace

- Completa palabras que ya aparecen **en cualquier lugar del archivo actual**.
- También ofrece siempre palabras de una lista de vocabulario inglés disponible sin conexión: 10 000
  palabras frecuentes de ECDICT y términos adicionales de IELTS/TOEFL/GRE. Las coincidencias del
  archivo tienen prioridad; el vocabulario inglés completa el resto.
- Muestra texto fantasma mientras escribes. También puedes ejecutar el comando **Trigger Suggest**
  de Visual Studio Code para ver hasta ocho sugerencias ordenadas. Su atajo predeterminado es
  `Ctrl+Space` si macOS no lo reserva.

## Qué no hace

- No completa frases, la línea siguiente ni código según su significado.
- No rastrea el espacio de trabajo, no mantiene una caché de aprendizaje ni palabras fijadas, y no
  incluye un modo específico para CJK.
- No envía solicitudes a la nube, no recopila telemetría ni usa modelos de lenguaje.

## Instalar

[Instalar desde Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=codingEzio.x-local-auto-completion) ·
[Abrir en Visual Studio Code](https://vscode.dev/redirect?url=vscode%3Aextension%2FcodingEzio.x-local-auto-completion)

```sh
deno task check
deno task package
code --install-extension dist/x-local-auto-completion-0.5.2.vsix
```

Después de instalar una versión actualizada del VSIX, ejecuta **Developer: Reload Window**.
`editor.inlineSuggest.enabled` debe permanecer activado.

## Configurar

```jsonc
{
  "localAutoCompletion.enabled": true,
  "localAutoCompletion.minimumPrefixLength": 2
}
```

## Desarrollo

```sh
deno task check
deno task package
unzip -t dist/x-local-auto-completion-0.5.2.vsix
```

## Fuentes del vocabulario

[Fuentes del vocabulario](../data/SOURCE.md).
