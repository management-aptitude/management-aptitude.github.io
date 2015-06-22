---
layout: tabs
permalink: /notifications.html
---

<div class="container">
  <h2>Notifications</h2>
<!--  <div class="well"> -->
    {% for i in site.data.notifications.notify limit:3 %}
      <ul class="list-group customUl">
        <li class="list-group-item">{{ i.date }} - {{ i.description }} <a class="label label-warning" href="{{ i.url }}" target="_blank">Link</a></li>
      </ul>
    {% endfor %}


    {% for i in site.data.notifications.notify offset:3 %}
      <ul class="customUl">
        <li class="list-group-item">{{ i.date }} - {{ i.description }} <a class="label label-info" href="{{ i.url }}" target="_blank">Link</a></li>
      </ul>
    {% endfor %}
<!--  </div> -->
</div>
