class ProfilesController < ApplicationController
  def index
    @profile = Profile.all
  end

  def new
    @profile = Profile.new
  end

  def create
    @profile = Profile.new(profile_params)
    @profile.save
    redirect_to profiles_path
  end

  private

  def profile_params
    params.require(:profile).permit(:name, :image)
  end
end
