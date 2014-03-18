Pulse
===
Pulse is a web-based rhythm editor built with Rails and Bankbone.js. Pulse showcases the capabilities of producing synchronous audio via a Javascript application.

Demo - [pulse.renfredh.in](http://pulse.renfredh.in/)

# API

Pulse also offers an API for using sounds in other applications. 

`http://pulse.renfredh.in/instruments/1.json`

```json 
{
	"id": 1,
	"name": "Fat Snare",
	"category": "snare",
	"sample":"/media/samples/snares/fatsnare"
}
```