def register_user(email="test@test.com", username="john jones")
  headers = {'CONTENT TYPE' => 'application/json'}
  user = {user: {
            email:  email,
            password: "12345678",
            password_confirmation: "12345678",
            username: username
          }}
  post '/users', user, headers
end

def add_group
  register_user
  register_user('test2@test.com', 'simon sauder')
  register_user('test3@test.com', 'jimmy mac')
  headers = {'CONTENT TYPE' => 'application/json'}
  group = {group: {
            name: 'groupname',
            user_ids: [1, 2, 3]
          }}
  post '/groups', group, headers
end

def submit_payment
  register_user
  Group.create(name: 'groupname', user_ids: [4])
  headers = {'CONTENT TYPE' => 'application/json'}
  payment = {payment: {
            amount: 100.23,
            user_id: 4
          }}
  post '/groups/2/payments', payment, headers
end

def sign_in(email="test@test.com", password="12345678")
  headers = {'CONTENT TYPE' => 'application/json'}
  user = {user: {
            email:  email,
            password: password,
          }}
  post '/users/sign_in', user, headers
end
