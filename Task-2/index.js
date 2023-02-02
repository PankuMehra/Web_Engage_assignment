const fetchData = async () => {
  var template = `
  <h2>Q1. If Id is even print its respective name, username, email else print "I'm Odd"</h2>
    <ul>
        {% for user in data %}
            {% if user.id % 2 == 0 %}
                <li>Name: {{ user.name}} , Username: {{user.username}}, Email: {{user.email}}</li>
            {% else %}
                <li>I'm Odd</li>
            {% endif %}
        {% endfor %}
    </ul>
  <h2>Q2. From the shared sapmle data of array JSON, based on all id values get its respecive
  address keys and values and print them.</h2>
    <ul>
        {% for user in data %}
            {% if user.id % 2 == 0 %}
                <li>Name: {{ user.name}} , Username: {{user.username}}, Email: {{user.email}}</li>
            {% else %}
                <li>I'm Odd</li>
            {% endif %}
        {% endfor %}
    </ul>
  <h2>Q1. If Id is even print its respective name, username, email else print "I'm Odd"</h2>
    <ul>
        {% for user in data %}
            {% if user.id % 2 == 0 %}
                <li>Name: {{ user.name}} , Username: {{user.username}}, Email: {{user.email}}</li>
            {% else %}
                <li>I'm Odd</li>
            {% endif %}
        {% endfor %}
    </ul>
  <h2>Q1. If Id is even print its respective name, username, email else print "I'm Odd"</h2>
    <ul>
        {% for user in data %}
            {% if user.id % 2 == 0 %}
                <li>Name: {{ user.name}} , Username: {{user.username}}, Email: {{user.email}}</li>
            {% else %}
                <li>I'm Odd</li>
            {% endif %}
        {% endfor %}
    </ul>
  <h2>Q1. If Id is even print its respective name, username, email else print "I'm Odd"</h2>
    <ul>
        {% for user in data %}
            {% if user.id % 2 == 0 %}
                <li>Name: {{ user.name}} , Username: {{user.username}}, Email: {{user.email}}</li>
            {% else %}
                <li>I'm Odd</li>
            {% endif %}
        {% endfor %}
    </ul>
  <h2>Q1. If Id is even print its respective name, username, email else print "I'm Odd"</h2>
    <ul>
        {% for user in data %}
            {% if user.id % 2 == 0 %}
                <li>Name: {{ user.name}} , Username: {{user.username}}, Email: {{user.email}}</li>
            {% else %}
                <li>I'm Odd</li>
            {% endif %}
        {% endfor %}
    </ul>
  `;

  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let fetchedData = await res.json();
  let data = {
    data: fetchedData,
  };

  let result = nunjucks.renderString(template, data);
  document.getElementById("nunjucks").innerHTML = result;
};

fetchData();
