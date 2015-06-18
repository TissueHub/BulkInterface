Package.describe({
    name: "robbinsd:bulk-interface",
    version: "0.0.1",
    summary: "Create bulk-interface forms for quickly importing/exporting *SV data.",
    // URL to the Git repository containing the source code for this package.
    git: "https://github.com/drobbins/BulkInterface.git",
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: "README.md"
});

Package.onUse(function(api) {
    api.versionsFrom("1.1.0.2");
    api.use("coffeescript");
    api.use(["standard-app-packages", "templating", "blaze", "ui", "reactive-var", "reactive-dict"]);
    api.use("harrison:papa-parse@1.1.0");
    if (api.export) api.export("BulkInterface");
    api.addFiles(["bulk-interface-templates.html", "bulk-interface.css"], "client");
    api.addFiles(["lib/jquery.dataTables.min.js", "lib/dataTables.bootstrap.css", "lib/dataTables.bootstrap.js"], "client")
    api.addFiles("bulk-interface.coffee");
});

Package.onTest(function(api) {
    api.use("tinytest");
    api.use("coffeescript"),
    api.use("robbinsd:bulk-interface");
    api.addFiles("bulk-interface-tests.coffee");
});