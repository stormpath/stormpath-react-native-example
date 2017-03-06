#Stormpath is Joining Okta
We are incredibly excited to announce that [Stormpath is joining forces with Okta](https://stormpath.com/blog/stormpaths-new-path?utm_source=github&utm_medium=readme&utm-campaign=okta-announcement). Please visit [the Migration FAQs](https://stormpath.com/oktaplusstormpath?utm_source=github&utm_medium=readme&utm-campaign=okta-announcement) for a detailed look at what this means for Stormpath users.

We're available to answer all questions at [support@stormpath.com](mailto:support@stormpath.com).


# React Native Login and Authentication

This is the code developed in the tutorial on creating a React Native application
with login and authentication using Stormpath.

### Requirements

- npm or yarn
- React Native CLI
- Android SDK setup, with emulator or device attached. See https://facebook.github.io/react-native/docs/getting-started.html

Should work on Windows, Linux or Mac.

### Prerequisites

You need an account with Stormpath (https://api.stormpath.com/register) and an application setup (https://docs.stormpath.com/console/product-guide/latest/getting-started.html).
Make sure the CLIENT_API entry in Enviroment.js matches your DNS entry. See https://docs.stormpath.com/console/product-guide/latest/applications.html#managing-an-application-s-client-api-configuration
for more.

### Installing

Install libraries in the project folder with npm or yarn

```sh
$ yarn
```

### Running

To run simply type

```sh
$ react-native run-android
```

or run-ios if needed.

### Todo

 - Adding data view with authorization
 - User registration screen

### License
----

MIT
