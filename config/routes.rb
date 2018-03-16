Rails.application.routes.draw do
  
  resources :papers do
  	resources :sections do 
  		collection do
  			patch :sort
  		end
  	end
  end

  resources :citations

  
  devise_for :users, controllers: { :omniauth_callbacks => "omniauth_callbacks" }
  
  root to: 'home#top'

  get '/dashboard' => "papers#dashboard"


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
