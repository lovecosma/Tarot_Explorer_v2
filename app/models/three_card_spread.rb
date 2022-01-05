class ThreeCardSpread < Spread 
    validate :limit_is_three_cards


    def limit_is_three_cards
        unless self.cards.length === 3 
            self.errors.add(:cards, "Must only have three cards.")
        end

    end
end