# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

resp = RestClient.get("https://rws-cards-api.herokuapp.com/api/v1/cards")
cardData = JSON.parse(resp)["cards"]

cardData.each do |card_hash|
    Card.create(
        card_type: card_hash["type"],
        name_short: card_hash["name_short"],
        name: card_hash["name"],
        value: card_hash["value"],
        value_int: card_hash["value_int"],
        meaning_up: card_hash["meaning_up"],
        meaning_rev: card_hash["meaning_rev"],
        desc: card_hash["desc"]
    )
end


puts "Cards seeded."