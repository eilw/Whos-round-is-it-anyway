require 'rails_helper'

  feature 'payment', type: :request do
    scenario 'submitting a payment' do
      expect{submit_payment}.to change{Payment.count}.by 1
      response_body = JSON.parse(response.body)
      expect(response_body["id"]).to eq 4
    end

  end
