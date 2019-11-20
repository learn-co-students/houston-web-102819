require_relative './config/environment'
use Rack::MethodOverride
use ApplicationController
run Sinatra::Application