Pulse
===
Pulse is an interactive web-based rhythm editor built with Rails and Bankbone.js. I built it mainly for fun, as well as to showcase the capabilities of dynamically loading and playing synchronous audio via a client-side Javascript application.

Demo - [pulse.renf.red](http://pulse.renf.red/)

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
