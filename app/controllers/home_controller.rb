class HomeController < ApplicationController
	before_action :authenticate_user, only[:main]
	before_action :correct_user, only: [:main]
  
  def top
  end

  def dashboard
  	@paper = Paper.new
  	@papers = User.find(current_user.id).papers
  end

  


 
 
end
