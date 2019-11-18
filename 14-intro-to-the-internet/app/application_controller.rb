class ApplicationController < Sinatra::Base

    get('/hello') do 
        "Hello World"
    end

    get('/something-else') do 
        "something else"
    end

    # patch

    # post

    # delete

end