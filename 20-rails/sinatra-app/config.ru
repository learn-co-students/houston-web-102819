require_relative './config/environment'
use Rack::MethodOverride
use PetsController
use OwnersController

run Sinatra::Application