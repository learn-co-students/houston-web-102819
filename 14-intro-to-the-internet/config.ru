require_relative './config/environment'
use Rack::PostBodyContentTypeParser

run ApplicationController
