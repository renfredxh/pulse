class Rhythm < ActiveRecord::Base
  has_many :patterns, dependent: :destroy
  has_many :notes, through: :patterns
  after_save {
    8.times do |row|
      pattern = Pattern.new(
        rhythm_id: self.id,
        row: row
      )
      pattern.save()
      16.times do |col|
        note = Note.new(
          pattern_id: pattern.id,
          position: col,
          volume: 80,
          active: false
        )
        note.save()
      end
    end
  }
end
