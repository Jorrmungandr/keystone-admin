module.exports = (app) => {
	app.get('/', (req, res) => {
		res.send(
			`
        <!doctype html>
        <html>
          <head>
            <title>Keystone With React And Redux</title>
          </head>
          <body>
            <div class="react-container">
              <h1> Hello World </h1>
            </div>
          </body>
        </html>
        `
		);
	});
};