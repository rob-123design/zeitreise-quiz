# Zeitreise-Quiz

Quiz-App zum Lernen für Geschichte, Klasse 5/6. Läuft im Browser und lässt sich als App installieren, auch offline.

## Auf dem Mac testen

1. Terminal öffnen, in den Projektordner wechseln (der Ordner, der `app` enthält) und den Server im Ordner `app` starten:
   ```sh
   cd app
   python3 -m http.server 8000
   ```
2. Im Browser `http://localhost:8000` öffnen.
3. Als App installieren (optional):
   - **Chrome:** Installieren-Symbol rechts in der Adressleiste anklicken.
   - **Safari:** Menü Ablage → „Zum Dock hinzufügen“.
4. Beenden: im Terminal `Ctrl + C`.

## Auf dem Android-Handy installieren

Android braucht eine HTTPS-Adresse, deshalb muss der Ordner `app/` einmal ins Internet:

- **Netlify Drop (am einfachsten):** <https://app.netlify.com/drop> öffnen und den Ordner `app/` ins Browserfenster ziehen. Du bekommst eine HTTPS-Adresse.
- **Oder GitHub Pages:** Inhalt von `app/` in ein GitHub-Repository hochladen, dann unter Settings → Pages die Veröffentlichung einschalten.

Dann auf dem Handy:

1. Die HTTPS-Adresse in **Chrome** öffnen.
2. Menü ⋮ → „App installieren“ bzw. „Zum Startbildschirm hinzufügen“.
3. Die App einmal mit Internet öffnen. Danach funktioniert sie auch offline.

Änderungen (zum Beispiel neue Fragen) einfach erneut hochladen. Die App holt sich beim nächsten Start mit Internet automatisch die neue Version.

## Fragen ergänzen

Alle Fragen stehen in `fragen.js`. Eine neue Frage kommt in die Liste `fragen` des passenden Kapitels:

```js
{ text: 'Welcher Fluss fließt durch Rom?',
  antworten: ['Tiber', 'Nil', 'Rhein', 'Donau'], richtig: 0, level: 1,
  info: 'Rom wurde am Ufer des Tibers gegründet.' },
```

- `antworten`: genau 4 verschiedene Antworten. Die richtige zuerst, dann ist `richtig: 0`. Die App mischt beim Anzeigen.
- `level`: 1 = leicht, 2 = mittel, 3 = schwer.
- `info`: kurze Erklärung, höchstens 160 Zeichen.
- Neue Fragen erscheinen automatisch auch im Kapitel „Alleswisser“, dem Mix aus allen Epochen.

Danach `pruefe.js` laufen lassen (Anleitung steht oben in `pruefe.js`), im Ordner darüber:

```sh
node pruefe.js
```

Es muss „0 Fehler“ melden.
