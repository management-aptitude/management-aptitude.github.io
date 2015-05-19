---
layout: tabs
---

<div class="container">
  <div class="well">
    {% for i in site.data.notifications.notify limit:3 %}
      <ul class="customUl">
        <li>{{ i.date }} - {{ i.description }} <a class="label label-warning" href="{{ i.url }}">Link</a></li>
      </ul>
    {% endfor %}


    {% for i in site.data.notifications.notify offset:3 %}
      <ul class="customUl">
        <li>{{ i.date }} - {{ i.description }} <a class="label label-info" href="{{ i.url }}">Link</a></li>
      </ul>
    {% endfor %}
  </div>
</div>
