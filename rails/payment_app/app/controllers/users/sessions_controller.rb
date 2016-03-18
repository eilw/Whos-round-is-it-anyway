class Users::SessionsController < Devise::SessionsController
# before_filter :configure_sign_in_params, only: [:create]
  skip_before_filter  :verify_authenticity_token
  clear_respond_to
  respond_to :json

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    @user = current_user
    render json: @user.as_json(only: [:id, :email, :username], include: :groups)
  end

  # DELETE /resource/sign_out
  def destroy
    # super
    sign_out
    render json: {success: 'true'}, status: 200
  end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.for(:sign_in) << :attribute
  # end
end
