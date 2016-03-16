require 'rails_helper'

  feature 'payment', type: :request do
    scenario 'submitting a payment' do
      expect{submit_payment}.to change{Payment.count}.by 1
    end

  end
