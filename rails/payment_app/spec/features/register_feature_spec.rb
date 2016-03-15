
require 'rails_helper'

feature 'user registration', type: :request do

  scenario 'valid POST to /users adds user to database' do
    expect{register_user}.to change{User.count}.by 1
  end

end
