class SpreadsController < ApplicationController


    def create 
         
        spread = Spread.new(spread_params)
        binding.pry
    end



    private 
    
    def spread_params
        params.require(:spread).permit(:title, :card_ids => [])
    end

end
