# Pokemon Lite

Versuche, eine vereinfachte Version von Pokemon zu erstellen!

Erstelle eine neue Datei namens `index.js`.

## Funktionsweise:

* Du solltest eine `Pokemon`-Klasse haben, die neue Pokemon erstellt, die einen Namen, Gesundheit, Magie und eine Reihe von Fähigkeiten haben (die Fähigkeiten können in einem Array oder Objekt gespeichert werden).
* Du solltest eine `AttackSkill`-Klasse haben, um neue Angriffe zu erstellen. Angriffe verbrauchen die Magie des Pokemons, um anderen Pokemon Schaden zuzufügen. Jedes einzelne Pokemon hat einen bestimmten Satz von Angriffen. Die AttackSkill-Klasse sollte drei Argumente enthalten: den Namen der Attacke, die Höhe des Schadens, den die Attacke verursacht, und die Menge der Magie, die die Attacke benötigt. Hier erstellen wir zum Beispiel eine Angriffsfertigkeit `lightning`(Blitz), die 40 Schaden verursacht und 30 Magie erfordert:

```javascript
let lightning = new AttackSkill("lightning", 40, 30);
```

Diese Zahlen müssen nicht korrekt sein oder den echten Pokemonzahlen entsprechen - du kannst sie einfach erfinden.
* Ein Pokemon hat keine Fähigkeiten, wenn es erstellt wird. Es muss die Methode `learnAttackSkill` verwenden, um eine neue Fähigkeit zu erlernen. `learnAttackSkill` sollte ein Angriffsobjekt als Argument erhalten. Die spezifischen Angriffe sollten mit der Konstruktorfunktion `AttackSkill` erstellt und dann intern zum Array `skills` des Pokemons hinzugefügt werden. Hier ist ein Beispiel dafür, wie du zuerst eine Fähigkeit erstellst und sie dann einem Pokemon hinzufügst:

```javascript
let lightning = new AttackSkill("lightning", 40, 30);
pikachu.learnAttackSkill(lightning);
```

* Dein Pokemon sollte eine Methode namens `showStatus` haben, die seinen Status auf der Konsole protokolliert (wie viel Gesundheit, Magie übrig ist).
* Dein Pokemon sollte eine Methode namens `attack` haben, die eine der Angriffsfähigkeiten des Pokemons auswählt, um ein anderes Pokemon anzugreifen. Das ist seine wichtigste Methode! Berücksichtige alle Möglichkeiten, die diese Methode bietet. (z.B. was ist, wenn das Pokemon nicht genug Magie hat, um die Angriffsfähigkeit einzusetzen?). Die Angriffsmethode sollte eine der Attacken des Pokemons aufrufen und auf das andere Pokemon anwenden. Wenn du zum Beispiel die Attacke `lightning`(Blitz) (die wir oben erstellt haben) aufrufst, sollte sie dem anderen Pokemon 40 Schaden zufügen und dem Pokemon, das die Attacke ausgeführt hat, 30 Magie entziehen. Die Angriffsmethode sollte außerdem in console.log ausgeben, ob der Angriff erfolgreich war (d.h. ob das angreifende Pokemon genug Magie hatte, um den Angriff tatsächlich auszuführen), und das Ergebnis des Angriffs. Die Angriffsmethode sollte zwei Argumente erhalten: den Index (oder Schlüssel) des Angriffs, der verwendet werden soll, und das Pokemon-Objekt, das angegriffen werden soll. Hier ist zum Beispiel ein Angriff, der von Pikachu auf Bulbasaur ausgeführt wird:
```javascript
pikachu.attack(0, bulbasaur);
```
* Schließlich erstellst du eine Methode namens `getMagic`, mit der du deinem Pokemon etwas Magie zurückgeben kannst (du kannst genau festlegen, wie viel Magie zurückgegeben werden soll).
* Du solltest eine Konstruktorfunktion erstellen, um ein Pokemon zu erzeugen, und dann die Methoden in die Eigenschaft .prototype der Konstruktorfunktion einfügen. Anschließend solltest du diese Konstruktorfunktion verwenden, um alle neuen Pokemon zu erstellen.

* Genauso solltest du eine Konstruktorfunktion haben, um einen `attackSkill` zu erstellen.

Zum Beispiel die folgende Sequenz:

```javascript
/ /Jedes Pokemon sollte mit einer bestimmten Menge an Gesundheit und Magie starten. Hier beginnt Pikachu zum Beispiel mit 120 Lebenspunkten und 80 Magie
let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

// Jede Fähigkeit sollte eine bestimmte Menge Schaden anrichten und eine bestimmte Menge Magie von dem Pokemon verbrauchen, das die Fähigkeit benutzt hat.
let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill ("poison seed", 20, 20);
pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);

//Das erste Argument von "Attack" sollte der Index (oder Schlüssel) des Angriffs sein
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);

// sollte das Folgende auf der Konsole ausgeben:

// Pikachu hat die Fähigkeit "Blitz" erfolgreich eingesetzt!
// Bulbasaurus hat 40 Schaden erhalten
-------------------
// Bulbasaur hat die Fähigkeit "Giftsamen" erfolgreich eingesetzt!
// Pikachu hat 20 Schaden erhalten
-------------------
// pikachu status
// Gesundheit: 100
// Magie: 50
-------------------
// bulbasaur status
// Gesundheit: 55
// Magie: 85
-------------------
// Pikachu hat die Fähigkeit "Blitz" erfolgreich eingesetzt!
// Bulbasaur erhielt 40 Schaden
-------------------
// nicht genug Magie, kann keinen Angriff starten!
-------------------
// Pikachu hat 20 Magie zurückbekommen
-------------------
// Pikachu hat die Fähigkeit "Blitz" erfolgreich eingesetzt!
// Bulbasaur hat 40 Schaden erhalten
-------------------
// Bulbasaurus ist tot!
-------------------
// bulbasaur ist bereits tot!
// Das ist nur ein Beispiel. Du kannst verschiedene Angriffsserien aufrufen, um unterschiedliche Ergebnisse zu erzielen!
```
## Bonus: Füge weitere Pokemon und Angriffstypen hinzu.
