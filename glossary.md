# v-bind

# v-on

- click
- click.stop
- keydown
- keyup
- keyup.enter

# v-once

# v-model

# v-if

# v-else

# v-show

# v-for

- :key="goal" # idea: unique identifier in lists for events that vue does not forget something

#

# components

## local

import in script in der jeweiligen unterkomponente und dann mit components option einführen

## dynamic

template element <component :is="componentName">

- switching data leads to lost data from input
  - fix: use <keep-alive> around <component>

## teleport

an element to move a html template to somewhere else
<teleport to:"body">

# scoped style

wenn man in einer komponente scoped bei style wählt dann wird der style nur für die komponente angewendet

# slots

man kann komponenten bauen welche quasi dann dynamisch inhalte aufnehmen
wenn die wrapper komponente mehrere slots hat dann muss man da "name" geben, und dann bei eintragen mit template v-slot:name verwenden.
scoped greifen nur da wo der code liegt, also greifen wrapper nicht wenn.
shortform with #

scoped slots: Dazu da wenn man dynamische listen hat und dort von außen werte reinlegen will und konfigurieren mithilfe von props welche sich auf template beziehen

# generell

- fragmente: mehrere toplevel html elemente sind erlaubt im gegensatz zu vue 2

# style guide

- namen:
  komponenten welcher oft verwendet werden: AppX, BaseX
  einmalige Komponenten: TheX

- ordner:
  components/UI: Allgemeine Sachen
  components/Layout: Hauptelemente der Oberfläche
  components/Shop
