let config = {
  production: {
    session: {
      key: 'the.express.session.id',
      secret: 'something.super.secret'
    },
    // database: 'mongodb://<user>:<pwd>@apollo.modulusmongo.net:27017/db',
  },
  default: {
    session: {
      key: 'the.express.session.id',
      secret: 'something.super.secret'
    },
    database: 'mongodb://127.0.0.1:27017/google-contacts',
    server: {
      host: 'localhost',
      port: '3000'
    }
  }
}

exports.get = function get(env) {
  return config[env] || config.default;
}