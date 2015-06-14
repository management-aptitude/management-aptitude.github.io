---
layout: default
---
<div class="container">
  <section>
    <h4>How to ???</h4>
    <p>This section should explain how to contribute !</p>
	<h4>Get start with "Github"</h4>
	<p>If you are already familiar with git and github, start hacking the repository at <a href="https://github.com/management-aptitude" target="_blank">https://github.com/management-aptitude</a></p>

	<p>To get started we need an account in <a href="https://github.com/" target="_blank">Github</a>. After signing in, go to the <a href="https://github.com/management-aptitude/management-aptitude.github.io">management-aptitude.github.io</a> repository at <a href="https://github.com/management-aptitude/management-aptitude.github.io">https://github.com/management-aptitude/management-aptitude.github.io</a>. 
	Here we can see all our webpage related files. To start working on the repo, click the "Fork" button the top right hand side of the page. This will fork the project to your account. 
	Continue ...
	</p>
  </section>

  <div class="container">
  <section>
    <h4>Contributors</h4>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th>Area</th>
        <!-- <th>Contact</th> -->
      </tr>
    </thead>
    <tbody>
    {% for i in site.data.contribution.contributors %}
      <tr>
          <td>{{ i.name }}</td>
          <td>{{ i.area }}</td>
          <!-- <td><a href="mailto:{{ i.link }}">{{ i.link }}</a></td> -->
      </tr>
      {% endfor %}
    </tbody>
  </table>
  </section>
	</div>
</div>
