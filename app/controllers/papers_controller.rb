class PapersController < ApplicationController
  before_action :authenticate_user!
  before_action :correct_user, only: [:show]

  def dashboard
    @paper = Paper.new
    @papers = User.find(current_user.id).papers
  end

  #preview page
  def show
    @paper = Paper.find(params[:id])
    
    @sections = Paper.find(@paper.id).sections.order(:position)

    @citations = Citation.where(paper_id:@paper.id).order(:title)
  end


  def create
  	@paper = Paper.create(paper_params)
  end

  def update
    @paper = Paper.find(params[:id])
    @paper.update_attributes(paper_params)

    #update.js.erbに渡す変数を作って置く
    @userID = @paper.user_id
    @papers = User.find(@userID).papers
  end

  def destroy
    @paper = Paper.find(params[:id])
    @paper.destroy
    
    #destory.js.erbに渡す変数を作って置く
    @userID = @paper.user_id
    @papers = User.find(@userID).papers
    
  end

  private
  def paper_params
    params.require(:paper).permit(:title, :user_id)
  end
  def correct_user
      @user = Paper.find(params[:id]).user_id
      redirect_to(root_path) unless @user == current_user.id
  end
end
