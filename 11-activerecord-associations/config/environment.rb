require 'bundler/setup'
require 'require_all'


Bundler.require # <-- Requires everything in the gemfile at once
 

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: "db/development.sqlite"
)

require_all 'app' # <-- Requires all our models

# Sqlite3.connect(':memory:')


