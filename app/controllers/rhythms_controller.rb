class RhythmsController < ApplicationController
  before_action :set_rhythm, only: [:show, :edit, :update, :destroy]

  # GET /rhythms
  # GET /rhythms.json
  def index
    @rhythms = Rhythm.all
  end

  # GET /rhythms/1
  # GET /rhythms/1.json
  def show
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rhythm
      @rhythm = Rhythm.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def rhythm_params
      params[:rhythm]
    end
end
