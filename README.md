# Quasar Test App (quasar-test-app)

An app to preview different features of Quasar/Vue for
potential useage in ticket runner.

#### Working (or semi working) features

* Programmatically adding inputs that link to unique data objects in state. 
* Compartmentalized validation functions in a separate file to import into vue.
* Progress bars on different form page links. The values shown are hardcoded, not linked to real values.
* Some quasar components like menu, drawer, q-input.

 #### Planned features

-integration with firebase, including authentication and exploring potential user/group database structure.
-further translation into Vuex format (most components right now
have their own data object in-file.)
-Continue adding different input types, like radio buttons, checkboxes, URL validation

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
