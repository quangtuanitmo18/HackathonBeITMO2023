import { ScoreBeItmo } from '@/types/scoreBeItmo/scoreBeItmo.type'
import { http } from '@/utils/http'

export const URL_GET_SCORE = 'user/score-category/'

export const scoreBeItmoApi = {
  getScoreBeItmo({ id }: { id: string }) {
    return http.get<ScoreBeItmo>(`${URL_GET_SCORE}${id}`)
  }
}
