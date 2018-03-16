class SectionsController < ApplicationController
  before_action :authenticate_user!
  before_action :correct_user, only: [:show]

  # dashboardからshowへの繋ぎ役
  def new
    @section = Paper.find(params[:paper_id]).sections.last
    @paper = Paper.find(params[:paper_id])
    redirect_to action:'show', id:@section.id
  end
  
  def show
    @paperID = params[:paper_id]
    @sectionID = params[:id]
    @paper = Paper.find(params[:paper_id])
    
    
    @section = Section.find(params[:id])
    @sections = Paper.find(params[:paper_id]).sections.order(:position)

    @citation = Citation.new
    @citations = Section.find(params[:id]).citations
  end

  def sort
    params[:section].each_with_index do |id, index|
      Section.where(id:id).update(position: index + 1)
    end

    head :ok
  end

  def create
  	@section = Section.create(section_params)
    @paperID = params[:paper_id]
    redirect_to action: :show, id:@section.id
  end 

  def update
  	@section = Section.find(params[:id])
  	@section.update_attributes(section_params)
    @paperID = params[:paper_id]
  end

  def destroy
    @section = Section.find(params[:section_id])
    @section.destroy
    
    #destory.js.erbに渡す変数を作って置く
    @paperID = @section.paper_id
    @sections = Paper.find(@paperID).sections
  end

  private
    def section_params
      params.require(:section).permit(:title, :text, :paper_id,:position)
    end
    #他のユーザーのmainページにアクセス出来ないようにする。
    def correct_user
      @user = Paper.find(params[:paper_id]).user_id
      redirect_to(root_path) unless @user == current_user.id
    end
end
