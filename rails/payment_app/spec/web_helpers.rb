def register_user(email="test@test.com")
  headers = {'CONTENT TYPE' => 'application/json'}
  user = {user: {
            email:  email,
            password: "12345678",
            password_confirmation: "12345678"
          }}
  post '/users', user, headers
end

def add_group
  register_user
  register_user('test2@test.com')
  register_user('test3@test.com')
  headers = {'CONTENT TYPE' => 'application/json'}
  group = {group: {
            name: 'groupname',
            user_ids: [1, 2, 3]
          }}
  post '/groups', group, headers
end

def submit_payment
  register_user
  headers = {'CONTENT TYPE' => 'application/json'}
  payment = {payment: {
            amount: 100.23,
            user_id: 4
          }}
  post '/groups/1/payments', payment, headers
end

def sign_in(email="test@test.com", password="12345678")
  headers = {'CONTENT TYPE' => 'application/json'}
  user = {user: {
            email:  email,
            password: password,
          }}
  post '/users/sign_in', user, headers
end
