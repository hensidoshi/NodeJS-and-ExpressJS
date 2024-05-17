//wap to nodejs to store the home page in html file.

const fs = require('fs');

const homepageContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Home Page</title>
</head>
<body>
  <h1>Welcome to the Home Page</h1>
  <p>This is the home page content.</p>
</body>
</html>
`;

fs.writeFile('home.html', homepageContent, (err) => {
  if (err) throw err;
  console.log('Home page created!');
});