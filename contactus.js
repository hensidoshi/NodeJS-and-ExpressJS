//wap to nodejs to store the contact us page in html file.

const fs = require('fs');

const contactpageContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Contact Us</title>
</head>
<body>
  <h1>Contact Us</h1>
  <p>This is the contact us page content.</p>
</body>
</html>
`;

fs.writeFile('contact.html', contactpageContent, (err) => {
  if (err) throw err;
  console.log('Contact us page created!');
});