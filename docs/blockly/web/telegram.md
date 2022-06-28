---
sidebar_position: 4
title: Telegram
hide_title: false
---


## Telegram
Mit [Telegram](https://www.telegram.org) kannst du einen Chatbot bauen, der dir hilft, deine senseBox von überall per Textnachricht auszulesen.

> Telegram ist ein kostenloser Messenger, der die Möglichkeit bietet auf einfachste Art Chatbots anzulegen. Um diesen nutzen zu können, benötigst du einen Telegram-Account. Bei der Erstellung deines Chatbots wird dir dann ein Token angezeigt, welches du in Blockly verwenden kannst, um dich zu authentifizieren. Mehr zur Erstellung eines Chatbots findest du im Projekt [Telegram Chatbot für die senseBox mit Blockly](https://sensebox.de/projects/de/2019-12-15-telegram-blockly).

Mit dem `Telegram Bot initialisieren`-Block wird im Setup() die senseBox darauf vorbereitet Daten auf Anfrage an den Chatbot zu senden. Im Textfeld "Token" musst du den beim Erstellen deines Chatbots angezeigten Token eintragen.

{% include image.html image=page.image5 %}

Anschließend kann mit dem Block `Telegram mache` in der Endlosschleife() programmiert werden, was genau der Chatbot ausführen soll.

{% include image.html image=page.image6 %}

Die Blöcke `Bei Nachricht` und `Sende Nachricht` können im freien Blockabschnitt des `Telegam mache`-Blocks platziert werden, um festzulegen, was die senseBox beim Empfang einer bestimmten Nachricht ausführen soll.

<!-- <table style="border-collapse:collapse;border-spacing:0;border:none" class="tg"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;text-align:left;vertical-align:middle">{% include image.html image=page.image7 %}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;text-align:left;vertical-align:top">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;text-align:left;vertical-align:top">{% include image.html image=page.image8 %}</th></tr></table> -->

Mit dem `Bei Nachricht`-Block kann eine Aktion festgelegt werden, die die senseBox ausführen soll, wenn eine bestimmte Nachricht über Telegram eintrifft. Zum Beispiel eine LED an- oder ausschalten.

Mit dem `Sende Nachricht`-Block kann eine Nachricht über Telegram an den/die Nutzer:in des Bots gesendet werden.
