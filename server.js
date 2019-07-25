
const PORT = process.env.PORT || 3000;

//


// Starting the server, syncing our models -----------------------------------w-/

  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/autoflipper in your browser.",
      PORT,
      PORT
    );
  });

module.exports = app;