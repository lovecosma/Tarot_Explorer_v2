class CardsController < ApplicationController


    def index 
        
        if session[:user_id]
            cards = Card.all
            render json: cards, status: :ok
        else
            render json: {errors: "Must be logged in to view cards."}, status: :unauthorized
        end

    end


    def show    
        if session[:user_id]
            card = Card.find_by(id: params[:id])
            if card 
                render json: card, status: :ok
            else 
                render json: {errors: ["Card not found."]}
            end
        else
            render json: {errors: "Must be logged in to view cards."}, status: :unauthorized
        end
    end

end
