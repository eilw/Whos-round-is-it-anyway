require 'rails_helper'

feature 'sign in users', type: :request do
  scenario 'valid POST to /users/sign_in returns the user_id' do
    register_user('test1@email.com', 'simon sauder')
    register_user('test2@email.com', 'jimmy mac')

    sign_in('test1@email.com', '12345678')

    response_body = JSON.parse(response.body)
    expect(response_body["id"]).to eq 8
    expect(response_body["email"]).to eq 'test1@email.com'
    expect(response_body["username"]).to eq 'simon sauder'
  end
end
