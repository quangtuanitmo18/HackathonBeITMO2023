export interface ScoreBeItmo {
  data: ScoreBeItmoData
}

export interface ScoreBeItmoData {
  isu: number
  full_name: string
  id: number
  scoreCategory: ScoreCategory
}

export interface ScoreCategory {
  id: number
  BeHealthy: number
  BeFit: number
  BePro: number
  BeFriendly: number
  BeEco: number
  BeOpen: number
  sumScore: number
}
