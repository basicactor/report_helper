class CitationsController < ApplicationController
  def create
  	 @citation = Citation.create(citation_params)

     #create.js.erbに渡す変数を作って置く
     @citations = Section.find(citation_params[:section_id]).citations
  end

  def update
    @citation = Citation.find(params[:id])
    @citation.update_attributes(citation_params)
    
    @sectionID = @citation.section_id
    @citations = Section.find(@sectionID).citations
    
  end

  def destroy
    @citation = Citation.find(params[:id])
    @citation.destroy
    
    #destory.js.erbに渡す変数を作って置く
    @sectionID = @citation.section_id
    @citations = Section.find(@sectionID).citations
  end

  private
  def citation_params
    params.require(:citation).permit(:url, :title, :paper_id, :section_id)
  end
end
