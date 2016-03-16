require 'rails_helper'

feature 'sign in users', type: :request do
  scenario 'valid POST to /users/sign_in returns the user_id' do
    user1 = create(:user, email:'test1@email.com', username:'simon sauder')
    user2 = create(:user, email:'test2@email.com', username:'jimmy mac')

    sign_in('test1@email.com', '12345678')

    response_body = JSON.parse(response.body)
    expect(response_body["id"]).to eq user1.id
    expect(response_body["email"]).to eq user1.email
    expect(response_body["username"]).to eq user1.username
  end
end
