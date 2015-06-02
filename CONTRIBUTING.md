---
layout: default
---
<div class="container">
  <section>
    <h4>How to ???</h4>
    <p>This section should explain how to contribute !</p>
  </section>

  <section>
    <h4>Contributors</h4>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th>Area</th>
      </tr>
    </thead>
    <tbody>
    {% for i in site.data.custom.contributors %}
      <tr>
          <td>{{ i.name }}</td>
          <td>{{ i.area }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
  </section>
	
</div>
