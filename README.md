# á¤áá©á/Unikta ð±
<p align = "center">
<img src="images/header.png" width="80%"></img>
</p>

á¤áá©á/Unikta (\/uËniËkÊ°tÊ°É/ 'seeds') is a Cherokee font and character encoder for [Playdate Pulp](https://play.date/pulp/), a tool that lets users create simple videogames and interactive stories without writing any code which can be played in a web browser, on a computer, or on a [Playdate](https://play.date).

Pulp is easy to use because of its limitations, but these limitations also include only being able to use the Latin alphabet. á¤áá©á/Unikta works around this by replacing the stock glyphs with the [Cherokee syllabary](https://en.wikipedia.org/wiki/Cherokee_syllabary), so that while Pulp still sees them as the original letters, numbers, and punctuation, they display as Cherokee syllabary characters instead.

For example, with Unikta loaded into Pulp, typing in `-Y|" +@9!` gives this result:
<p align = "center">
<img src="images/osiyo_elohi.png" width="80%"></img>
<br>á£áá², á¡á¶á¯! 'Hello World!'</p>

A full chart of how each character is mapped is provided [below](#mapping), but you don't need to worry about mapping to use the font; you can use the [Unikta character encoder](https://morgansleeper.github.io/Unikta/index.html) to type in syllabary and generate text to copy and paste directly into Pulp.

<h3 align = "center"><a href="https://morgansleeper.github.io/Unikta/index.html"><b>Click here to use the character encoder!</a></b></h1>

## Using Unikta

1. Download [`Unikta.png`](Unikta.png) from this repository
2. After starting a new project in [Pulp](https://play.date/pulp/), go to the 'Font' page from the left-hand menu; then click the 'Import' button on top of the font preview to upload `Unikta.png`
3. Use the [Unikta character encoder](https://morgansleeper.github.io/Unikta/index.html) to type in anything you want to display in syllabary; it will give you text to copy-paste into Pulp for the correct mapping
4. á°áªá¸á¦!

A few notes:

   - Since there's only space for 95 glyphs in a Pulp font and the Cherokee syllabary takes up 85 of those slots, punctuation is limited to the bare minimum â space, comma, period, exclamation mark, question mark, quotes, and a colon.

   - For the same reason, most of the numbers from 0-9 are rendered by visual equivalents in the syllabary: á« _wi_ for '0', á­ _wu_ for '9', etc. The character encoder takes this into account, so you can type in numbers and get the correct equivalents to paste into Pulp.

## Mapping
||||||||||||
|----:|:----|:----|:----|:----|:----|:----|:----|:----|:----|:----|
|á¤áá©á:|á |á¡|á¢|á£|á¤|á¥|
||a|e|i|o|u|v|
|Pulp:|ï¼|+|,|-|.|ï¼|
||||||||||||||||||||||
|á¤áá©á:|á¦|á§|á¨|á©|áª|á«|á¬|
||ga|ka|ge|gi|go|gu|gv|
|Pulp:|0|1|2|3|4|5|6|
||||||||||||||||||||||
|á¤áá©á:|á­|á®|á¯|á°|á±|á²|
||sa|se|si|so|su|sv|
|Pulp:|7|8|9|:|;|<|
||||||||||||||||||||||
|á¤áá©á:|á³|á´|áµ|á¶|á·|á¸|
||la|le|li|lo|lu|lv|
|Pulp:|=|>|?|@|A|B|
||||||||||||||||||||||
|á¤áá©á:|á¹|áº|á»|á¼|á½|
||ma|me|mi|mo|mu|
|Pulp:|C|D|E|F|G|
||||||||||||||||||||||
|á¤áá©á:|á¾|á¿|á|á|á|á|á|á|
||na|hna|nah|ne|ni|no|nu|nv|
|Pulp:|H|I|J|K|L|M|N|O|
||||||||||||||||||||||
|á¤áá©á:|á|á|á|á|á|á|
||qua|que|qui|quo|quu|quv|
|Pulp:|P|Q|R|S|T|U|
||||||||||||||||||||||
|á¤áá©á:|á|á|á|á|á|á|á|
||s|sa|se|si|so|su|sv|
|Pulp:|V|W|X|Y|Z|[|/|
||||||||||||||||||||||
|á¤áá©á:|á|á|á|á|á|á|á|á|á|
||da|ta|de|te|di|ti|do|du|dv|
|Pulp:|]|^|_|`|a|b|c|d|e|
||||||||||||||||||||||
|á¤áá©á:|á|á|á|á|á |á¡|á¢|
||dla|tla|tle|tli|tlo|tlu|tlv|
|Pulp:|f|g|h|i|j|k|l|
||||||||||||||||||||||
|á¤áá©á:|á£|á¤|á¥|á¦|á§|á¨|
||tsa|tse|tsi|tso|tsu|tsv|
|Pulp:|m|n|o|p|q|r|
||||||||||||||||||||||
|á¤áá©á:|á©|áª|á«|á¬|á­|á®|
||wa|we|wi|wo|wu|wv|
|Pulp:|s|t|u|v|w|x|
||||||||||||||||||||||
|á¤áá©á:|á¯|á°|á±|á²|á³|á´|
||ya|ye|yi|yo|yu|yv|
|Pulp:|y|z|{|ï½|}|~|
||||||||||||||||||||||
||||||||||||||||||||||
|á¤áá©á:|0|1|2|3|4|5|6|7|8|9|
|Pulp:|u|'|M|(|X|d|x|)|H|w|
||||||||||||||||||||||
||||||||||||||||||||||
|á¤áá©á:|[ ]|!|,|.|"|:|?|
|Pulp:|[ ]|!|"|#|$|%|&|

## Screenshots
<p align="center">
<img src="images/screenshot.png" width="80%"></img>
<img src="images/screenshot2.png" width="80%"></img>
</p>


## Acknowledgments & extras

Project inspired by weepjp's [Japanese localization test](https://github.com/weepjp/Playdate-Pulp-Sample-jp) of Pulp and its sample game.

Character encoder modeled on r12a's [Pinyin to IPA transcoder](https://github.com/r12a/app-pinyin-phonetics).

_Playdate is a trademark of [Panic](https://panic.com)._
