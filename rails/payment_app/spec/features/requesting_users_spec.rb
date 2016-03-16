require 'rails_helper'

feature 'requesting users', type: :request do
  scenario 'valid GET to /users returns user list in JSON' do
    register_user('test1@email.com')
    register_user('test2@email.com')
    get '/users', {}

    response_body = JSON.parse(response.body)
    expect(response.status).to eq 200
    expect(response_body[0]["id"]).to eq 6
    expect(response_body[0]["email"]).to eq 'test1@email.com'
    expect(response_body[1]["id"]).to eq 7
    expect(response_body[1]["email"]).to eq 'test2@email.com'
  end
end
