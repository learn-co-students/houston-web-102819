require_relative './config/environment'
use Rack::MethodOverride
use ApplicationController
use OwnersController

run Sinatra::Application