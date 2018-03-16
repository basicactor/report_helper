class PapersController < ApplicationController
  
  def show
    @paper = Paper.find(params[:id])
    
    @sections = Paper.find(@paper.id).sections
    @intro = @sections.where(part:'introduction').order(:position)
    @body = @sections.where(part:'body').order(:position)
    @conc = @sections.where(part:'conclusion').order(:position)

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
end
