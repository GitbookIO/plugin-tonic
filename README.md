# Embed Tonic in GitBook

This GitBook plugins makes it easy to embed [tonic](https://www.tonicdev.com) notebook in a GitBook.

### How to use it?

Configure the plugin in your `book.json`:

```js
{
    "plugins": ["tonic"]
}
```

Include a notebook using the `tonic` block:

```md
Here is notebook:

{% tonic %}
// GeoJSON!
var google = "https://storage.googleapis.com/maps-devrel/google.json"
JSON.parse(await require("request-promise")(google))
{% endtonic %}


And here is a read-only notebook:

{% tonic readOnly=true %}
// GeoJSON!
var google = "https://storage.googleapis.com/maps-devrel/google.json"
JSON.parse(await require("request-promise")(google))
{% endtonic %}
```
