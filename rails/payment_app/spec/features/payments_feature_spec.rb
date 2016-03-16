require 'rails_helper'

  feature 'payment', type: :request do
    scenario 'submitting a payment' do
      user1 = create(:user, email:'test1@email.com', username:'simon sauder')
      expect{submit_payment(user1)}.to change{Payment.count}.by 1
      response_body = JSON.parse(response.body)
      expect(response_body["id"]).to eq user1.id
    end

  end
