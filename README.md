# Runkit for GitBook

Run the sample code in your documentation right on your website using [Runkit](https://runkit.com/).

### How to use it?

Configure the plugin in your `book.json`:

```js
{
    "plugins": ["runkit"]
}
```

Include a notebook using the `runkit` block:

```md
Here is notebook:

{% runkit %}
// GeoJSON!
var google = "https://storage.googleapis.com/maps-devrel/google.json"
JSON.parse(await require("request-promise")(google))
{% endrunkit %}


And here is a read-only notebook:

{% runkit readOnly=true %}
// GeoJSON!
var google = "https://storage.googleapis.com/maps-devrel/google.json"
JSON.parse(await require("request-promise")(google))
{% endrunkit %}
```
