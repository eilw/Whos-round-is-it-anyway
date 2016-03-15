def register_user
  headers = {'CONTENT TYPE' => 'application/json'}
  user = {user: {
            email:  "test@test.com",
            password: "12345678",
            password_confirmation: "12345678"
          }}
  post '/users', user, headers
end
