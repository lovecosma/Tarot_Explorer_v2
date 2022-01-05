class CreateCardsSpreads < ActiveRecord::Migration[6.1]
  def change
    create_table :cards_spreads do |t|
      t.belongs_to :card
      t.belongs_to :spread
      t.timestamps
    end
  end
end
