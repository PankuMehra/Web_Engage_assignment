const fetchData = async () => {
  var template = `
  <h3>Q1. If Id is even print its respective name, username, email else print "I'm Odd"</h3>
    <ul>
        {% for user in data %}
            {% if user.id is even %}
                <li>Name: {{ user.name}}, Username: {{user.username}}, Email: {{user.email}}</li>
            {% else %}
                <li>I'm Odd</li>
            {% endif %}
        {% endfor %}
    </ul>
  <h3>Q2. From the shared sapmle data of array JSON, based on all id values get its respecive address keys and values and print them.</h3>
    <ul>
        {% for user in data %}
            <li>City: {{ user.address.city}}, Geolocation: Latitude: {{user.address.geo.lat}}, Longitude: {{user.address.geo.lng}}, Street: {{user.address.street}}, Suite: {{user.address.suite}}, Zipcode: {{user.address.zipcode}}</li>
        {% endfor %}
    </ul>
  <h3>Q3. If any email ends with .biz print its name with email values.</h3>
    <ul>
      {% for user in data %}
          {% if user.email.endsWith(".biz") %}
            <li>Name: {{user.name}}, Email: {{user.email}}</li> 
          {% endif %}
      {% endfor %}
    </ul>
  <h3>Q4. If city contains any of following "Aliyaview", "Howemouth", Gwenborough print its respective cityname, zipcode, Geo with lat and lang values.</h3>
    <ul>
        {% for user in data %}
            {% if user.address.city === "Aliyaview" or user.address.city === "Howemouth" or user.address.city === "Gwenborough" %}
                <li>The Zipcode and Geo of cityname {{ user.address.city}} is: {{user.address.zipcode}} and {{user.address.geo.lat}}, {{user.address.geo.lng}}</li>
            {% endif %}
        {% endfor %}
    </ul>
  <h3>Q5. Print CatchPhrase which will contain max 15 letters.</h3>
    <ul>
        {% for user in data %}
            {% if user.company.catchPhrase | length > 15 %}
                <li>CatchPhrase: {{user.company.catchPhrase}}</li>
            {% endif %}
        {% endfor %}
    </ul>
  `;

  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let fetchedData = await res.json();
  console.log("fetchedData:", fetchedData[0]);
  let data = {
    data: fetchedData,
  };

  let result = nunjucks.renderString(template, data);
  document.getElementById("nunjucks").innerHTML = result;
};

fetchData();
