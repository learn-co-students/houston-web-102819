class ApplicationController < Sinatra::Base

    set(:views, './app/views')

    get('/artists') do
        @artists = Artist.all
        erb(:artists)
    end

    get('/find-artist/:id') do 
        @artist = Artist.find(params[:id])
        erb(:find_artist)
    end


    get('/artist-form') do 
        erb(:artist_form)
    end
   
    # params = {
    #     artist: {
    #       name: 'User input',
    #       height: 'User input'
    #     }
    # }
    post('/artists') do
        # binding.pry
        Artist.create(params[:artist])
        # Artist.create({
        #     name: params[:artist][:name] # => nil
        # })
        Artist.all.to_json
    end

end

