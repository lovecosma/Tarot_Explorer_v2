class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :card_type
      t.string :name_short
      t.string :name
      t.string :value
      t.integer :value_int
      t.string :meaning_up
      t.string :meaning_rev
      t.string :desc

      t.timestamps
    end
  end
end
